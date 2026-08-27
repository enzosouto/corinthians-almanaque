<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import Timeline from '../components/Timeline.vue'
import ProximaSecao from '../components/ProximaSecao.vue'
import { linhaDoTempo } from '../utils/data'
</script>

<template>
  <main class="momentos">
    <PageHeader
      numero="05"
      titulo="Grandes Momentos"
      legenda="Fundação, conquistas e capítulos que marcaram a trajetória alvinegra."
    />

    <section class="container momentos__corpo">
      <Timeline :eventos="linhaDoTempo" />
    </section>

    <ProximaSecao />
  </main>
</template>

<style scoped>
.momentos__corpo {
  padding-bottom: 5rem;
}
</style>
