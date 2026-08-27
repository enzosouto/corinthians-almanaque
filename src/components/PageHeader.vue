<script setup lang="ts">
defineProps<{
  numero: string
  titulo: string
  legenda?: string
}>()
</script>

<template>
  <header class="page-header container">
    <div class="page-header__topo">
      <span class="eyebrow">Seção {{ numero }}</span>
      <router-link to="/" class="page-header__voltar label">Capa</router-link>
    </div>
    <h1 class="page-header__titulo" v-reveal>{{ titulo }}</h1>
    <p v-if="legenda" class="page-header__legenda" v-reveal="80">{{ legenda }}</p>
  </header>
</template>

<style scoped>
.page-header {
  padding-top: 7rem;
  padding-bottom: 3rem;
}

.page-header__topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--line);
  margin-bottom: 1.75rem;
}

.page-header__voltar {
  transition: color 0.3s ease;
}
.page-header__voltar:hover {
  color: var(--bordo-bright);
}

.page-header__titulo {
  font-size: clamp(2.2rem, 6vw, 3.6rem);
  text-transform: uppercase;
}

.page-header__legenda {
  margin-top: 0.9rem;
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--ink-dim);
  max-width: 46ch;
}

@media (max-width: 560px) {
  .page-header {
    padding-top: 5.25rem;
    padding-bottom: 2rem;
  }

  .page-header__topo {
    padding-bottom: 1rem;
    margin-bottom: 1.4rem;
  }
}
</style>
