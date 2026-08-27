<script setup lang="ts">
import { ChevronRight } from '@lucide/vue'
import type { Temporada } from '../types'
import { resolverImagem } from '../utils/images'

defineProps<{ temporada: Temporada; indice: number }>()
</script>

<template>
  <router-link
    :to="`/temporadas/${temporada.ano}`"
    class="cartao-temporada"
    v-reveal="Math.min(indice, 10) * 40"
  >
    <img
      v-if="temporada.imagem"
      :src="resolverImagem(temporada.imagem)"
      alt=""
      class="cartao-temporada__foto"
      loading="lazy"
    />
    <span class="cartao-temporada__ano numeral">{{ temporada.ano }}</span>
    <div class="cartao-temporada__corpo">
      <p class="cartao-temporada__resumo">{{ temporada.resumo }}</p>
      <div v-if="temporada.titulos?.length" class="cartao-temporada__titulos">
        <span v-for="t in temporada.titulos" :key="t" class="stamp">{{ t }}</span>
      </div>
    </div>
    <ChevronRight class="cartao-temporada__seta" :size="18" :stroke-width="1.5" />
  </router-link>
</template>

<style scoped>
.cartao-temporada {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--line);
  transition: padding-left 0.35s ease, border-color 0.35s ease;
}

.cartao-temporada:first-of-type {
  border-top: 1px solid var(--line);
}

.cartao-temporada:hover {
  padding-left: 0.75rem;
  border-color: var(--line-strong);
}

.cartao-temporada:hover .cartao-temporada__ano {
  color: var(--bordo-bright);
}

.cartao-temporada__foto {
  flex: 0 0 auto;
  width: 56px;
  height: 56px;
  object-fit: cover;
  border: 1px solid var(--line-strong);
  filter: grayscale(0.2) contrast(1.05) brightness(0.9) sepia(0.12);
}

.cartao-temporada__ano {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  color: var(--gold);
  flex: 0 0 auto;
  min-width: 4.5ch;
  transition: color 0.3s ease;
}

.cartao-temporada__corpo {
  flex: 1;
  min-width: 0;
}

.cartao-temporada__resumo {
  margin: 0;
  font-size: 0.92rem;
  color: var(--ink-dim);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.cartao-temporada__titulos {
  margin-top: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cartao-temporada__seta {
  flex: 0 0 auto;
  color: var(--ink-faint);
}

@media (max-width: 560px) {
  .cartao-temporada {
    align-items: flex-start;
    gap: 1rem;
  }
  .cartao-temporada__seta {
    display: none;
  }
}
</style>
