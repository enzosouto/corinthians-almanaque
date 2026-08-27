<script setup lang="ts">
import { X } from '@lucide/vue'
import { secoes } from '../utils/sections'

const props = defineProps<{ aberto: boolean }>()
const emit = defineEmits<{ (e: 'fechar'): void }>()

function ir() {
  emit('fechar')
}
</script>

<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div v-if="props.aberto" class="overlay" role="dialog" aria-modal="true">
        <div class="overlay__inner container">
          <div class="overlay__topo">
            <span class="eyebrow">Sumário</span>
            <button type="button" class="overlay__fechar" aria-label="Fechar índice" @click="emit('fechar')">
              <X :size="20" :stroke-width="1.5" />
            </button>
          </div>

          <nav class="overlay__lista">
            <router-link
              v-for="(s, i) in secoes"
              :key="s.rota"
              :to="s.rota"
              class="overlay__item"
              v-reveal="i * 70"
              @click="ir"
            >
              <span class="overlay__numero numeral">{{ s.numero }}</span>
              <span class="overlay__texto">
                <span class="overlay__titulo">{{ s.titulo }}</span>
                <span class="overlay__legenda">{{ s.legenda }}</span>
              </span>
            </router-link>
          </nav>

          <div class="overlay__rodape">
            <router-link to="/" class="overlay__capa" @click="ir">← voltar à capa</router-link>
            <span class="label">Est. 1910</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: linear-gradient(160deg, var(--bg-2), var(--bg) 70%);
  overflow-y: auto;
}

.overlay__inner {
  min-height: 100%;
  padding-top: 2rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
}

.overlay__topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--line);
}

.overlay__fechar {
  background: transparent;
  border: 1px solid var(--line-strong);
  color: var(--ink);
  padding: 0.5rem;
  border-radius: var(--radius);
}

.overlay__lista {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  padding: 2rem 0;
}

.overlay__item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.4rem 0;
  border-bottom: 1px solid var(--line);
  transition: padding-left 0.35s ease, color 0.35s ease;
}

.overlay__item:first-child {
  border-top: 1px solid var(--line);
}

.overlay__item:hover {
  padding-left: 1rem;
  color: var(--bordo-bright);
}

.overlay__numero {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  color: var(--gold-dim);
  width: 3ch;
}

.overlay__texto {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.overlay__titulo {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 5vw, 2.8rem);
  font-weight: 700;
}

.overlay__legenda {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.85rem;
  color: var(--ink-faint);
}

.overlay__rodape {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
}

.overlay__capa {
  font-family: var(--font-stamp);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--ink-dim);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.35s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

@media (max-width: 560px) {
  .overlay__item {
    gap: 0.9rem;
  }
  .overlay__numero {
    width: 2.2ch;
  }
}
</style>
