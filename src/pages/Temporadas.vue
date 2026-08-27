<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import SeasonCard from '../components/SeasonCard.vue'
import ProximaSecao from '../components/ProximaSecao.vue'
import { temporadas } from '../utils/data'

const ordenadas = [...temporadas].reverse()
</script>

<template>
  <main class="temporadas">
    <PageHeader
      numero="02"
      titulo="Temporadas"
      legenda="Campanhas, títulos e fatos marcantes, ano a ano."
    />

    <section class="container temporadas__lista">
      <SeasonCard v-for="(t, i) in ordenadas" :key="t.ano" :temporada="t" :indice="i" />
    </section>

    <ProximaSecao />
  </main>
</template>

<style scoped>
.temporadas__lista {
  padding-bottom: 5rem;
}
</style>
