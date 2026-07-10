# Script para o Claude para Chrome — publicar atualização do Rumo no GitHub

> **Antes de colar isso na extensão:**
> 1. Baixe os arquivos que te mandei (`index.html`, `manifest.json`, `sw.js`, `README.md`, `tutorial-completo.mp4` e a pasta `icons/` com os 4 `.png`, ou o `rumo_v5_deploy.zip` já descompactado) para uma pasta no seu computador.
> 2. Confirme que o link do repositório abaixo ainda é o certo: `https://github.com/mayaramattos/assistente_financeir_2.0`
> 3. Ative o Claude para Chrome nessa aba e cole todo o conteúdo abaixo como uma única instrução.

---

## Contexto para o agente

Você vai publicar uma atualização do app **Rumo** no GitHub do usuário, usando a interface web de upload (sem linha de comando). São **9 arquivos**, mantendo a estrutura de pastas:

```
index.html
manifest.json
sw.js
README.md
tutorial-completo.mp4
icons/icon-192.png
icons/icon-512.png
icons/icon-192-maskable.png
icons/icon-512-maskable.png
```

**Importante sobre limitações:** se em algum momento abrir uma janela nativa do sistema operacional (o seletor de arquivos do Windows/Mac para escolher o que enviar), você **não consegue controlar essa janela** — ela roda fora do navegador. Nesse caso, pare, avise o usuário exatamente o que precisa ser selecionado, e espere ele fazer essa parte manualmente antes de continuar.

**Atenção especial ao `README.md`:** se o repositório já tiver um `README.md`, o upload vai **substituir** o conteúdo atual por completo. Antes de confirmar o commit, avise o usuário disso e pergunte se ele quer mesmo sobrescrever — só prossiga com a confirmação dele.

---

## Passo a passo

1. Navegue até: `https://github.com/mayaramattos/assistente_financeir_2.0/upload/main`
   (esse é o link direto da tela de upload do GitHub; se der erro de branch, tente `/upload/master` ou veja qual é o nome da branch padrão do repositório antes).

2. Antes de selecionar os arquivos, navegue até a página principal do repositório e verifique se já existe um `README.md`. Se existir, avise o usuário: *"Já existe um README no repositório — se você continuar, ele vai ser substituído pelo novo. Confirma?"* e espere a resposta antes de seguir.

3. Volte para a tela de upload. Você verá uma área de "arraste arquivos aqui ou escolha seus arquivos". Clique em **"choose your files"**.

4. Isso deve abrir o seletor nativo do sistema operacional — **pare aqui** e peça ao usuário: *"Selecione os arquivos da raiz (index.html, manifest.json, sw.js, README.md, tutorial-completo.mp4) e a pasta icons/ inteira (ou os 4 arquivos dentro dela), mantendo a estrutura de pastas."*

5. Depois que o usuário confirmar que selecionou os arquivos, confira na lista de arquivos "a enviar" que aparecem **9 arquivos no total**, incluindo os 4 dentro de `icons/` com o caminho preservado (`icons/icon-192.png`, etc). Se a pasta `icons/` não aparecer com os arquivos dentro dela (alguns navegadores tratam pasta como upload plano), avise o usuário que pode ser necessário arrastar a pasta `icons` diretamente para a área de upload, em vez de usar o seletor.

6. Confirme também que `tutorial-completo.mp4` está na lista — é um arquivo de ~0,7MB, então pode demorar um pouco mais para aparecer como "pronto" na área de upload. Espere terminar antes de seguir.

7. Role até o final da página, no campo de commit:
   - Título do commit: `Adiciona PIN, parcelamento, comparativo mensal, alertas, PWA, importação de extrato (OFX/CSV/XLSX) e tutorial em vídeo`
   - Descrição (opcional): `Atualização do Rumo com bloqueio por PIN, compras parceladas no cartão, comparativo mês a mês, alertas de anomalia e assinaturas fantasmas, suporte a instalação como PWA, e um tutorial completo em GIF (dentro do app e no README).`
   - Deixe marcada a opção **"Commit directly to the [nome da branch] branch"**.

8. Clique em **"Commit changes"**.

9. Confirme que a página recarrega e mostra a lista de arquivos do repositório atualizada, com "poucos segundos atrás" ao lado de todos os arquivos, incluindo `README.md` e `tutorial-completo.mp4`.

10. Role a página principal do repositório para baixo — o GitHub renderiza o `README.md` automaticamente ali. Confirme que o GIF do tutorial aparece corretamente na página (não como um link quebrado).

11. Se o repositório já tiver o GitHub Pages ativado, espere cerca de 1 minuto e acesse a URL publicada (`https://mayaramattos.github.io/assistente_financeir_2.0/`) para confirmar que o site carrega sem erro. Abra o tutorial (botão "?") e confirme que o link "Veja o tutorial completo em GIF" no último passo funciona.

12. Me devolva um resumo: se o commit foi feito com sucesso, se todos os 9 arquivos estão no repositório, se o README renderizou o GIF corretamente, e se o site publicado carregou.

---

## Se algo der errado

- **Erro de permissão / login necessário:** avise o usuário que ele precisa estar logado no GitHub nessa aba antes de começar.
- **Branch errada:** se `/upload/main` der 404, volte para a página principal do repositório, veja o nome da branch padrão (aparece no botão perto da lista de arquivos) e ajuste a URL.
- **Pasta icons/ não preservada:** se o GitHub achatar tudo numa lista sem subpasta, pare e avise o usuário — nesse caso é melhor ele arrastar a pasta `icons` inteira (não os arquivos individuais) direto do explorador de arquivos para a área de upload do navegador.
- **Upload do vídeo travando ou muito lento:** é normal levar mais tempo por ser um arquivo maior (~0,7MB). Não recarregue a página nem cancele antes de confirmar que ele apareceu como "pronto" na lista.
