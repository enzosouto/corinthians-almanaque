<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import PlayerCard from '../components/PlayerCard.vue'
import ProximaSecao from '../components/ProximaSecao.vue'
import { jogadores } from '../utils/data'
</script>

<template>
  <main class="idolos">
    <PageHeader
      numero="04"
      titulo="Ídolos"
      legenda="Fichas dos jogadores que entraram para a história do Corinthians."
    />

    <section class="container idolos__grade">
      <PlayerCard v-for="(j, i) in jogadores" :key="j.slug" :jogador="j" :indice="i" />
    </section>

    <ProximaSecao />
  </main>
</template>

<style scoped>
.idolos__grade {
  padding-bottom: 5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 620px) {
  .idolos__grade {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 980px) {
  .idolos__grade {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
