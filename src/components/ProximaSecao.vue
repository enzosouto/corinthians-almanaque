<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowRight } from '@lucide/vue'
import { secoes } from '../utils/sections'

const route = useRoute()

const atual = computed(() => secoes.findIndex((s) => s.rota === route.path))
const proxima = computed(() => (atual.value >= 0 ? secoes[(atual.value + 1) % secoes.length] : undefined))
</script>

<template>
  <div v-if="proxima" class="proxima container">
    <router-link :to="proxima.rota" class="proxima__link">
      <span class="label">Próxima seção</span>
      <span class="proxima__titulo">
        {{ proxima.numero }} — {{ proxima.titulo }}
        <ArrowRight :size="18" :stroke-width="1.5" />
      </span>
    </router-link>
  </div>
</template>

<style scoped>
.proxima {
  padding: 1rem 0 3rem;
}

.proxima__link {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.6rem 0;
  border-top: 1px solid var(--line);
  transition: padding-left 0.35s ease;
}

.proxima__link:hover {
  padding-left: 0.5rem;
}

.proxima__link:hover .proxima__titulo {
  color: var(--bordo-bright);
}

.proxima__titulo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 3.6vw, 1.8rem);
  font-weight: 700;
  transition: color 0.3s ease;
}
</style>
