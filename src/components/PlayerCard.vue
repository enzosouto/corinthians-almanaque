<script setup lang="ts">
import type { Jogador } from '../types'
import { resolverImagem } from '../utils/images'

defineProps<{ jogador: Jogador; indice: number }>()

function iniciais(nome: string) {
  return nome
    .split(' ')
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
}
</script>

<template>
  <article class="ficha panel" v-reveal="Math.min(indice, 8) * 50">
    <header class="ficha__topo">
      <span class="ficha__num numeral">{{ String(indice + 1).padStart(2, '0') }}</span>
      <span class="label">{{ jogador.posicao }}</span>
    </header>

    <div class="ficha__medalhao" :class="{ 'ficha__medalhao--foto': jogador.foto }">
      <img
        v-if="jogador.foto"
        :src="resolverImagem(jogador.foto)"
        :alt="jogador.nome"
        class="ficha__foto"
        loading="lazy"
      />
      <span v-else class="ficha__iniciais numeral">{{ iniciais(jogador.nome) }}</span>
    </div>

    <h3 class="ficha__nome">{{ jogador.nome }}</h3>
    <p class="ficha__periodo label">{{ jogador.periodo }}</p>

    <p class="ficha__descricao">{{ jogador.descricao }}</p>

    <footer v-if="jogador.titulos?.length" class="ficha__titulos">
      <span v-for="t in jogador.titulos" :key="t" class="stamp">{{ t }}</span>
    </footer>
  </article>
</template>

<style scoped>
.ficha {
  padding: 1.5rem 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  position: relative;
}

.ficha::before {
  content: '';
  position: absolute;
  inset: 6px;
  border: 1px solid var(--line);
  pointer-events: none;
}

.ficha__topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ficha__num {
  font-size: 0.95rem;
  color: var(--gold-dim);
}

.ficha__medalhao {
  align-self: center;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: 1.5px solid var(--gold-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.1rem 0 1.2rem;
  background: radial-gradient(circle at 35% 30%, var(--paper-raised), var(--bg-2));
  overflow: hidden;
  transition: width 0.3s ease, height 0.3s ease;
}

.ficha__medalhao--foto {
  width: 128px;
  height: 128px;
  border-width: 2px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.5);
}

.ficha__foto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  filter: grayscale(0.35) contrast(1.08) brightness(0.95) sepia(0.1);
}

.ficha__iniciais {
  font-size: 1.6rem;
  color: var(--gold);
}

.ficha__nome {
  text-align: center;
  font-size: 1.25rem;
}

.ficha__periodo {
  text-align: center;
  margin-top: 0.4rem;
}

.ficha__descricao {
  margin-top: 1.1rem;
  font-size: 0.9rem;
  text-align: left;
}

.ficha__titulos {
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
