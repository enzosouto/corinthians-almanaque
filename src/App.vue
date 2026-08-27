<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import IndiceOverlay from './components/IndiceOverlay.vue'
import AppFooter from './components/AppFooter.vue'

const indiceAberto = ref(false)
const route = useRoute()

watch(route, () => {
  indiceAberto.value = false
})
</script>

<template>
  <AppHeader @abrir-indice="indiceAberto = true" />
  <IndiceOverlay :aberto="indiceAberto" @fechar="indiceAberto = false" />

  <router-view v-slot="{ Component, route: r }">
    <transition name="page-fold" mode="out-in">
      <component :is="Component" :key="r.path" />
    </transition>
  </router-view>

  <AppFooter v-if="route.name !== 'capa'" />
</template>
