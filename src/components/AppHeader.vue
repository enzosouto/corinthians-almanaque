<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Menu } from '@lucide/vue'
import logoMono from '../assets/logo-monograma.png'
import { secoes } from '../utils/sections'

defineEmits<{ (e: 'abrir-indice'): void }>()

const scrolled = ref(false)
const route = useRoute()

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function ativa(rota: string) {
  return route.path === rota || route.path.startsWith(rota + '/')
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="app-header" :class="{ 'app-header--scrolled': scrolled }">
    <div class="app-header__inner container">
      <router-link to="/" class="app-header__brand">
        <img :src="logoMono" alt="" class="app-header__monograma" />
        <span class="app-header__nome">Corinthians<em>Almanaque</em></span>
      </router-link>

      <nav class="app-header__secoes" aria-label="Seções do almanaque">
        <router-link
          v-for="s in secoes"
          :key="s.rota"
          :to="s.rota"
          class="app-header__secao"
          :class="{ 'app-header__secao--ativa': ativa(s.rota) }"
        >
          <span class="app-header__secao-num">{{ s.numero }}</span>
          {{ s.titulo }}
        </router-link>
      </nav>

      <button type="button" class="app-header__indice" @click="$emit('abrir-indice')">
        <span>Índice</span>
        <Menu :size="16" :stroke-width="1.5" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 400;
  padding: 1.1rem 0;
  background: linear-gradient(180deg, rgba(8, 7, 10, 0.9), rgba(8, 7, 10, 0));
  transition: background 0.4s ease, border-color 0.4s ease, padding 0.4s ease;
  border-bottom: 1px solid transparent;
}

.app-header--scrolled {
  background: rgba(8, 7, 10, 0.86);
  backdrop-filter: blur(6px);
  border-bottom-color: var(--line);
  padding: 0.75rem 0;
}

.app-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex: 0 0 auto;
}

.app-header__monograma {
  height: 30px;
  width: auto;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.6));
}

.app-header__nome {
  font-family: var(--font-stamp);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-dim);
}

.app-header__nome em {
  font-style: normal;
  color: var(--gold);
  display: block;
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  margin-top: 2px;
}

.app-header__secoes {
  display: none;
}

.app-header__indice {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 0 0 auto;
  background: transparent;
  border: 1px solid var(--line-strong);
  color: var(--ink);
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius);
  font-family: var(--font-stamp);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.app-header__indice:hover {
  border-color: var(--bordo-bright);
  background: var(--bordo-deep);
}

@media (max-width: 480px) {
  .app-header__nome {
    display: none;
  }
}

/* desktop: seções sempre visíveis, sem precisar abrir o índice */
@media (min-width: 980px) {
  .app-header__secoes {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .app-header__secao {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--font-stamp);
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    color: var(--ink-faint);
    padding-bottom: 0.2rem;
    border-bottom: 1px solid transparent;
    transition: color 0.3s ease, border-color 0.3s ease;
    white-space: nowrap;
  }

  .app-header__secao-num {
    color: var(--gold-dim);
  }

  .app-header__secao:hover {
    color: var(--ink);
  }

  .app-header__secao--ativa {
    color: var(--ink);
    border-bottom-color: var(--bordo-bright);
  }

  .app-header__secao--ativa .app-header__secao-num {
    color: var(--bordo-bright);
  }
}
</style>
