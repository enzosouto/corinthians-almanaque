<script setup lang="ts">
const ano = 2026
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__inner">
      <p class="app-footer__linha">
        <span class="text-gold">Corinthians Almanaque</span> — um álbum digital não-oficial, feito por torcedores.
      </p>
      <p class="label">Fundado em 1910 · São Paulo, Brasil · {{ ano }}</p>
      <p class="label app-footer__credito">Feito por Enzo Souto</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--line);
  padding: 2.5rem 0 3rem;
  margin-top: 4rem;
}

.app-footer__inner {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  text-align: center;
}

.app-footer__linha {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 0.95rem;
  color: var(--ink-dim);
  margin: 0;
}

.app-footer__credito {
  margin-top: 0.4rem;
  color: var(--gold-dim);
}
</style>
