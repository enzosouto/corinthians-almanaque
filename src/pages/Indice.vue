<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import { secoes } from '../utils/sections'
</script>

<template>
  <main class="indice">
    <PageHeader numero="00" titulo="Índice" legenda="Navegue pelo almanaque como se folheasse um livro." />

    <nav class="indice__lista container">
      <router-link
        v-for="(s, i) in secoes"
        :key="s.rota"
        :to="s.rota"
        class="indice__item"
        v-reveal="i * 60"
      >
        <span class="indice__numero numeral">{{ s.numero }}</span>
        <span class="indice__texto">
          <span class="indice__titulo">{{ s.titulo }}</span>
          <span class="indice__legenda">{{ s.legenda }}</span>
        </span>
      </router-link>
    </nav>
  </main>
</template>

<style scoped>
.indice__lista {
  padding-bottom: 5rem;
}

.indice__item {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--line);
  transition: padding-left 0.35s ease, color 0.35s ease;
}

.indice__item:first-child {
  border-top: 1px solid var(--line);
}

.indice__item:hover {
  padding-left: 1rem;
  color: var(--bordo-bright);
}

.indice__numero {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: var(--gold-dim);
  width: 3ch;
}

.indice__texto {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.indice__titulo {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 4.5vw, 2.4rem);
  font-weight: 700;
}

.indice__legenda {
  font-style: italic;
  font-size: 0.9rem;
  color: var(--ink-faint);
}
</style>
