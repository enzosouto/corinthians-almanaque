<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeft, ArrowRight } from '@lucide/vue'
import { temporadas, temporadaPorAno } from '../utils/data'
import { resolverImagem } from '../utils/images'

const props = defineProps<{ ano: string }>()

const temporada = computed(() => temporadaPorAno(props.ano))
const indiceAtual = computed(() => temporadas.findIndex((t) => t.ano === temporada.value?.ano))
const anterior = computed(() => (indiceAtual.value > 0 ? temporadas[indiceAtual.value - 1] : undefined))
const proxima = computed(() =>
  indiceAtual.value >= 0 && indiceAtual.value < temporadas.length - 1
    ? temporadas[indiceAtual.value + 1]
    : undefined
)

const stats = computed(() => temporada.value?.estatisticas)
const statsLista = computed(() => {
  const s = stats.value
  if (!s) return []
  return [
    { rotulo: 'Jogos', valor: s.jogos },
    { rotulo: 'Vitórias', valor: s.vitorias },
    { rotulo: 'Empates', valor: s.empates },
    { rotulo: 'Derrotas', valor: s.derrotas },
    { rotulo: 'Gols marcados', valor: s.golsMarcados },
    { rotulo: 'Gols sofridos', valor: s.golsSofridos },
    { rotulo: 'Aproveitamento', valor: s.aproveitamento != null ? `${s.aproveitamento}%` : undefined },
  ].filter((i) => i.valor !== undefined)
})
</script>

<template>
  <main v-if="temporada" class="temporada">
    <header class="temporada__topo container">
      <div class="folio">
        <router-link to="/temporadas" class="label temporada__voltar">
          <ArrowLeft :size="14" :stroke-width="1.5" />
          Temporadas
        </router-link>
        <span class="page-number">Almanaque · {{ temporada.ano }}</span>
      </div>

      <h1 class="temporada__ano numeral" v-reveal>{{ temporada.ano }}</h1>

      <div v-if="temporada.titulos?.length" class="temporada__titulos" v-reveal="60">
        <span v-for="t in temporada.titulos" :key="t" class="stamp">{{ t }}</span>
      </div>

      <p class="temporada__resumo" v-reveal="100">{{ temporada.resumo }}</p>
    </header>

    <section v-if="temporada.imagem || temporada.galeria?.length" class="container temporada__fotos">
      <figure v-if="temporada.imagem" class="recorte recorte--principal" v-reveal>
        <img :src="resolverImagem(temporada.imagem)" :alt="temporada.legendaImagem ?? `Registro da temporada ${temporada.ano}`" loading="lazy" />
        <figcaption v-if="temporada.legendaImagem">{{ temporada.legendaImagem }}</figcaption>
      </figure>
      <figure
        v-for="(g, i) in temporada.galeria"
        :key="g.imagem"
        class="recorte"
        v-reveal="i * 80 + 80"
      >
        <img :src="resolverImagem(g.imagem)" :alt="g.legenda ?? `Registro da temporada ${temporada.ano}`" loading="lazy" />
        <figcaption v-if="g.legenda">{{ g.legenda }}</figcaption>
      </figure>
    </section>

    <section v-if="statsLista.length" class="container temporada__stats-wrap">
      <div class="rule-label"><span>Números da temporada</span></div>
      <dl class="temporada__stats">
        <div v-for="item in statsLista" :key="item.rotulo" class="temporada__stat">
          <dt class="label">{{ item.rotulo }}</dt>
          <dd class="numeral">{{ item.valor }}</dd>
        </div>
      </dl>
    </section>

    <section class="container temporada__grid">
      <div class="panel temporada__ficha">
        <span class="label">Ficha técnica</span>
        <dl>
          <div>
            <dt class="label">Técnico</dt>
            <dd>{{ temporada.tecnico ?? 'Não catalogado' }}</dd>
          </div>
          <div>
            <dt class="label">Artilheiro</dt>
            <dd v-if="temporada.artilheiro">
              {{ temporada.artilheiro.nome }}
              <span v-if="temporada.artilheiro.gols"> — {{ temporada.artilheiro.gols }} gols</span>
            </dd>
            <dd v-else>Não catalogado</dd>
          </div>
        </dl>
      </div>

      <div class="temporada__jogadores">
        <div class="rule-label"><span>Jogadores-chave</span></div>
        <ul v-if="temporada.jogadoresChave?.length" class="temporada__lista-jogadores">
          <li v-for="j in temporada.jogadoresChave" :key="j">{{ j }}</li>
        </ul>
        <p v-else class="temporada__sem-dado">Nenhum jogador-chave catalogado para esta temporada.</p>
      </div>
    </section>

    <section class="container temporada__secao">
      <div class="rule-label"><span>Jogos marcantes</span></div>
      <ul v-if="temporada.jogosMarcantes?.length" class="temporada__eventos">
        <li v-for="(jm, i) in temporada.jogosMarcantes" :key="i">
          <span v-if="jm.data" class="label">{{ jm.data }}</span>
          <p>{{ jm.descricao }}</p>
        </li>
      </ul>
      <p v-else class="temporada__sem-dado">Nenhum jogo marcante catalogado para esta temporada.</p>
    </section>

    <section class="container temporada__secao">
      <div class="rule-label"><span>Fatos históricos</span></div>
      <ul v-if="temporada.fatosHistoricos?.length" class="temporada__eventos">
        <li v-for="(f, i) in temporada.fatosHistoricos" :key="i">
          <p>{{ f }}</p>
        </li>
      </ul>
      <p v-else class="temporada__sem-dado">Nenhum fato histórico catalogado para esta temporada.</p>
    </section>

    <nav class="container temporada__nav">
      <router-link v-if="anterior" :to="`/temporadas/${anterior.ano}`" class="temporada__nav-link">
        <ArrowLeft :size="16" :stroke-width="1.5" />
        <span>
          <span class="label">Anterior</span>
          <span class="numeral">{{ anterior.ano }}</span>
        </span>
      </router-link>
      <span v-else></span>
      <router-link v-if="proxima" :to="`/temporadas/${proxima.ano}`" class="temporada__nav-link temporada__nav-link--prox">
        <span>
          <span class="label">Próxima</span>
          <span class="numeral">{{ proxima.ano }}</span>
        </span>
        <ArrowRight :size="16" :stroke-width="1.5" />
      </router-link>
    </nav>
  </main>

  <main v-else class="container temporada-vazia">
    <p class="eyebrow">Página não encontrada</p>
    <h1>Esta temporada ainda não está no almanaque.</h1>
    <router-link to="/temporadas" class="btn btn--solid">Ver temporadas</router-link>
  </main>
</template>

<style scoped>
.temporada__topo {
  padding-top: 6.5rem;
  padding-bottom: 2rem;
}

.temporada__voltar {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.temporada__ano {
  font-size: clamp(3.4rem, 12vw, 7rem);
  margin-top: 1rem;
  color: var(--gold);
}

.temporada__titulos {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.2rem;
}

.temporada__resumo {
  margin-top: 1.5rem;
  max-width: 68ch;
  font-size: 1.05rem;
}

.temporada__fotos {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 3rem;
}

.recorte {
  margin: 0;
  background: var(--paper);
  border: 1px solid var(--line-strong);
  padding: 10px 10px 0;
  width: min(100%, 420px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.55);
}

.recorte:nth-child(odd) {
  transform: rotate(-1.4deg);
}
.recorte:nth-child(even) {
  transform: rotate(1.1deg);
}

.recorte img {
  width: 100%;
  height: auto;
  filter: grayscale(0.15) contrast(1.04) brightness(0.94) sepia(0.12);
}

.recorte figcaption {
  font-family: var(--font-stamp);
  font-size: 0.68rem;
  letter-spacing: 0.03em;
  color: var(--ink-faint);
  padding: 0.7rem 0.2rem 0.9rem;
  line-height: 1.5;
}

.recorte--principal {
  width: min(100%, 560px);
}

.temporada__stats-wrap {
  padding-bottom: 1rem;
}

.temporada__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin: 0;
}

.temporada__stat {
  padding: 1rem 0;
  border-top: 1px solid var(--line);
}

.temporada__stat dd {
  margin: 0.3rem 0 0;
  font-size: 1.6rem;
  color: var(--ink);
}

.temporada__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.temporada__ficha {
  padding: 1.5rem 1.75rem;
}

.temporada__ficha dl {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.temporada__ficha div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid var(--line);
}

.temporada__lista-jogadores {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.temporada__sem-dado {
  font-style: italic;
  color: var(--ink-faint);
  font-size: 0.9rem;
  margin: 0;
}

.temporada__lista-jogadores li {
  padding: 0.5rem 0.9rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  font-size: 0.88rem;
  color: var(--ink-dim);
}

.temporada__secao {
  padding-bottom: 1rem;
}

.temporada__eventos {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.temporada__eventos li {
  padding: 1.1rem 1.4rem;
  border-left: 2px solid var(--bordo);
  background: var(--bg-1);
}

.temporada__eventos p {
  margin: 0.25rem 0 0;
}

.temporada__nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 3rem 0 5rem;
  border-top: 1px solid var(--line);
  margin-top: 2rem;
}

.temporada__nav-link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: color 0.3s ease;
}

.temporada__nav-link:hover {
  color: var(--bordo-bright);
}

.temporada__nav-link--prox {
  margin-left: auto;
  text-align: right;
  flex-direction: row-reverse;
}

.temporada__nav-link span {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.temporada-vazia {
  padding-top: 8rem;
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

@media (max-width: 560px) {
  .temporada__topo {
    padding-top: 5.25rem;
    padding-bottom: 1.5rem;
  }
  .temporada-vazia {
    padding-top: 6.5rem;
  }
}

@media (min-width: 860px) {
  .temporada__stats {
    grid-template-columns: repeat(4, 1fr);
  }
  .temporada__grid {
    grid-template-columns: 1fr 1.4fr;
  }
}
</style>
