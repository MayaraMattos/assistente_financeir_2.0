# Rumo — Finanças Pessoais

Painel pessoal de finanças, 100% local: tudo fica guardado só no seu navegador (via `localStorage`), sem backend, sem servidor, sem terceiros. O app inteiro roda a partir de um único `index.html`.

**App publicado:** https://mayaramattos.github.io/assistente_financeir_2.0/

## Tutorial completo

<video src="tutorial-completo.mp4" controls width="700"></video>

*Dashboard com alertas → Contas (criar, marcar como paga, recorrência, fatura) → compra parcelada no cartão → Metas (com estudo de alocação) → aporte → Renda (salário, vale-alimentação, renda extra) → Calendário → tema escuro → PIN de acesso.*

## Funcionalidades

- **Dashboard**: patrimônio líquido, gráficos de gastos por categoria e por mês, regra 50/30/20, orçamento por categoria
- **Contas**: contas avulsas, recorrências automáticas, faturas de cartão de crédito com **compras parceladas**
- **Metas**: investimentos com aportes, estudo de alocação e simulação de meta com data-alvo
- **Renda**: salário/adiantamento, vale-alimentação (com cálculo de dias úteis) e renda extra
- **Calendário**: dias úteis do mês, feriados nacionais e municipais (Campo Grande/MS)
- **Comparativo mês a mês**: total e por categoria vs. o mês anterior
- **Alertas automáticos**: gastos fora do padrão (anomalias) e assinaturas antigas que talvez você não use mais
- **Importar extrato**: sobe um arquivo OFX ou CSV do seu banco, o Rumo identifica o formato sozinho e mostra uma prévia editável antes de importar como contas
- **PIN de acesso**: bloqueio local opcional pra proteger o app no seu navegador
- **PWA instalável**: dá pra instalar como app no computador ou celular, com suporte a uso offline
- **Exportar/Importar**: backup completo dos dados em JSON, a qualquer momento

## Privacidade

Nenhum dado sai do seu navegador. Não há backend, não há analytics, não há terceiros com acesso às suas informações financeiras. Todo o estado vive no `localStorage` do navegador em que você abre o app.

## Rodando localmente

Não precisa de instalação nem de servidor — basta abrir o `index.html` direto no navegador.

> **PWA e modo offline:** essas duas funcionalidades exigem HTTPS (ou `localhost`) por restrição dos próprios navegadores — não funcionam abrindo o arquivo diretamente (`file://`). Para testar essa parte localmente, sirva a pasta com um servidor simples, por exemplo:
> ```bash
> python3 -m http.server 8000
> ```
> e acesse `http://localhost:8000`.

## Estrutura do projeto

```
index.html          → app inteiro (HTML + CSS + JS)
manifest.json        → manifesto do PWA
sw.js                 → service worker (cache offline)
icons/                → ícones do PWA (192px, 512px, versões maskable)
tutorial-completo.mp4 → vídeo de demonstração (este README)
```
