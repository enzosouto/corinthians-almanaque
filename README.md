# Corinthians Almanaque

Álbum digital interativo contando a história do Sport Club Corinthians Paulista através de suas temporadas, títulos, ídolos e grandes momentos — pensado para parecer um **almanaque histórico de futebol** que ganhou vida na internet, e não um dashboard.

Site estático, gratuito, sem backend e sem banco de dados.

## Conceito

Identidade editorial escura e sombria, inspirada em almanaques antigos, jornais esportivos, revistas de futebol e fichas de jogadores. Paleta restrita a preto, branco, creme, cinza e bordô — **sem verde em nenhum lugar do projeto**.

## Funcionalidades

- **Capa** — página de abertura com escudo, ano de fundação e chamada para o almanaque.
- **Índice** — navegação editorial (página `/indice` e menu sobreposto acessível em qualquer página).
- **História** — fundação, cultura e identidade do clube.
- **Temporadas** — lista de temporadas e página individual por ano (`/temporadas/:ano`), com títulos, ficha técnica, jogadores-chave, jogos marcantes e fatos históricos.
- **Títulos** — conquistas agrupadas por competição, exibidas como selos colecionáveis.
- **Ídolos** — fichas de jogadores históricos.
- **Grandes Momentos** — linha do tempo interativa (clique no ano para expandir).
- Transições de página, revelação suave de elementos ao rolar a página e microanimações discretas (sem sacrificar performance).
- Mobile-first, testado em 375/390/430px, sem rolagem horizontal.

## Stack

- [Vue 3](https://vuejs.org/) + `<script setup>`
- [Vite](https://vitejs.dev/)
- TypeScript
- CSS próprio (variáveis, sem framework) — sem Tailwind
- [Lucide](https://lucide.dev/) (`@lucide/vue`) para os poucos ícones usados
- [Vue Router](https://router.vuejs.org/)

Sem backend, sem banco de dados, sem serviços pagos.

## Estrutura

```
src/
  components/   # componentes reutilizáveis (header, timeline, fichas, cards...)
  pages/        # uma página por rota
  data/         # dados em JSON, isolados da interface
  types/        # tipos TypeScript dos dados
  utils/        # loaders de dados, diretiva de scroll-reveal, seções do índice
  assets/       # escudo, monograma e demais imagens
```

## Dados

Todo o conteúdo histórico vive em `src/data/*.json`, completamente separado da interface:

- `seasons.json` — temporadas (resumo, técnico, títulos, jogadores-chave, jogos marcantes, fatos históricos, estatísticas quando disponíveis)
- `players.json` — ídolos/jogadores
- `titles.json` — títulos por competição
- `timeline.json` — linha do tempo / grandes momentos
- `matches.json` — jogos marcantes com placar

Os dados foram inseridos de forma conservadora: quando uma informação (estatística, jogador, placar) não pôde ser confirmada com confiança, ela simplesmente **não aparece** — os componentes escondem qualquer campo ausente automaticamente. Sinta-se à vontade para completar e corrigir os JSONs; a interface não precisa de nenhuma alteração para refletir isso.

### Como adicionar uma temporada

Edite `src/data/seasons.json` e adicione um objeto seguindo o tipo `Temporada` (`src/types/index.ts`). Apenas `ano`, `slug` e `resumo` são obrigatórios — todo o resto é opcional e só aparece se preenchido. A página `/temporadas/:ano` é gerada automaticamente.

### Como adicionar um jogador (ídolo)

Edite `src/data/players.json` e adicione um objeto seguindo o tipo `Jogador`. Ele aparecerá automaticamente na página Ídolos, na ordem em que estiver no arquivo.

### Como adicionar um acontecimento (grande momento)

Edite `src/data/timeline.json` e adicione um objeto seguindo o tipo `EventoLinhaDoTempo` (`ano`, `titulo`, `descricao`, `importancia`). Os eventos são ordenados automaticamente por ano e alimentam tanto a página Grandes Momentos quanto a linha histórica da página História.

### Imagens

Para usar molduras/imagens por temporada ou jogador, coloque os arquivos em `src/assets/` e referencie-os a partir do componente correspondente (`SeasonCard.vue`, `TemporadaDetalhe.vue`, `PlayerCard.vue`), ou adicione um campo `imagem` no JSON e ajuste o componente para exibi-lo condicionalmente.

## Executar localmente

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # servir o build de produção localmente
```

## Deploy gratuito

O projeto gera um site 100% estático em `dist/`. Qualquer uma das opções abaixo funciona sem custo:

**Vercel / Netlify** — conecte o repositório; ambos detectam Vite automaticamente.
Build command: `npm run build` · Output directory: `dist`.

**GitHub Pages** — gere o build e publique o conteúdo de `dist/` na branch `gh-pages` (ou via GitHub Actions). Se o site for publicado em `usuario.github.io/nome-do-repo`, defina `base: '/nome-do-repo/'` em `vite.config.ts` antes de buildar.

## Notas de design

- Paleta: preto, branco, creme, bege envelhecido, cinza e bordô como destaque. Sem verde em nenhuma parte da interface, gráficos, ícones ou estados (vitória/empate/derrota usam preto, cinza e bordô).
- Tipografia: Playfair Display (títulos/números), Lora (texto corrido) e Special Elite (legendas, carimbos, paginação) — via Google Fonts.
- A textura de grão e a vinheta no fundo são geradas em CSS puro (sem imagens extras), mantendo o site leve.
