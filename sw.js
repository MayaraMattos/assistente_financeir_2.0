/* Service worker do Rumo — cache simples do app shell para uso offline.
   Estrategia: network-first para o index.html (pra sempre pegar a versao mais nova
   quando online), cache-first para icones e manifest (raramente mudam). */

const CACHE_NAME = 'rumo-cache-v1';
const APP_SHELL = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-192-maskable.png',
  './icons/icon-512-maskable.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isAppFile = request.mode === 'navigate' || url.pathname.endsWith('index.html') || url.pathname === '/';

  if (isAppFile) {
    // Network-first: tenta buscar a versao mais nova; se falhar (offline), usa o cache.
    event.respondWith(
      fetch(request)
        .then((resp) => {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return resp;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first para o resto (icones, manifest)
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
