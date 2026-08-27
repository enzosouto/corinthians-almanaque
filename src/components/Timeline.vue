<script setup lang="ts">
import type { EventoLinhaDoTempo } from '../types'

defineProps<{ eventos: EventoLinhaDoTempo[] }>()
</script>

<template>
  <ol class="linha">
    <li
      v-for="(e, i) in eventos"
      :key="`${e.ano}-${e.titulo}`"
      class="linha__item"
      :class="[
        e.importancia === 'fundamental' ? 'linha__item--fundamental' : '',
        i % 2 === 0 ? 'linha__item--esquerda' : 'linha__item--direita',
      ]"
      v-reveal="Math.min(i, 10) * 60"
    >
      <div class="linha__eixo" aria-hidden="true">
        <span class="linha__ponto"></span>
      </div>

      <article class="linha__cartao">
        <span class="numeral linha__ano">{{ e.ano }}</span>
        <span v-if="e.importancia === 'fundamental'" class="stamp linha__selo">marco</span>
        <h3 class="linha__titulo">{{ e.titulo }}</h3>
        <p class="linha__descricao">{{ e.descricao }}</p>
      </article>
    </li>
  </ol>
</template>

<style scoped>
.linha {
  position: relative;
  padding: 1rem 0;
}

.linha::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1.1rem;
  width: 1px;
  background: linear-gradient(var(--line), var(--line-strong) 8%, var(--line-strong) 92%, var(--line));
}

.linha__item {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding-bottom: 3rem;
}

.linha__eixo {
  position: relative;
  flex: 0 0 auto;
  width: 2.2rem;
  display: flex;
  justify-content: center;
  padding-top: 0.4rem;
}

.linha__ponto {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--bg);
  border: 1.5px solid var(--gold-dim);
  box-shadow: 0 0 0 4px var(--bg);
}

.linha__item--fundamental .linha__ponto {
  background: var(--bordo);
  border-color: var(--bordo-bright);
  width: 15px;
  height: 15px;
  box-shadow: 0 0 0 4px var(--bg), 0 0 14px rgba(150, 34, 47, 0.65);
}

.linha__cartao {
  position: relative;
  flex: 1;
  min-width: 0;
  padding: 1.4rem 1.6rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-left: 2px solid var(--line-strong);
  border-radius: var(--radius);
}

.linha__item--fundamental .linha__cartao {
  border-left-color: var(--bordo);
  background: linear-gradient(135deg, var(--paper-raised), var(--paper));
}

.linha__ano {
  display: block;
  font-size: 1.4rem;
  color: var(--gold);
}

.linha__selo {
  position: absolute;
  top: 1.3rem;
  right: 1.4rem;
  color: var(--bordo-bright);
  border-color: var(--bordo);
  transform: rotate(4deg);
}

.linha__titulo {
  margin-top: 0.5rem;
  font-family: var(--font-display);
  font-size: clamp(1.15rem, 2.6vw, 1.4rem);
  font-weight: 700;
}

.linha__descricao {
  margin: 0.7rem 0 0;
  max-width: 60ch;
  font-size: 0.94rem;
  color: var(--ink-dim);
}

/* desktop: espinha central, cartões alternados */
@media (min-width: 860px) {
  .linha {
    padding: 1.5rem 0;
  }

  .linha::before {
    left: 50%;
    transform: translateX(-0.5px);
  }

  .linha__item {
    width: 50%;
    padding-bottom: 3.5rem;
  }

  .linha__item--esquerda {
    flex-direction: row-reverse;
    margin-right: auto;
    text-align: right;
  }

  .linha__item--direita {
    margin-left: auto;
  }

  .linha__item--esquerda .linha__eixo {
    margin-left: 0.6rem;
  }

  .linha__item--direita .linha__eixo {
    margin-right: 0.6rem;
  }

  .linha__eixo::after {
    content: '';
    position: absolute;
    top: 0.85rem;
    width: 1.6rem;
    height: 1px;
    background: var(--line-strong);
  }

  .linha__item--esquerda .linha__eixo::after {
    right: -1.6rem;
  }

  .linha__item--direita .linha__eixo::after {
    left: -1.6rem;
  }

  .linha__item--esquerda .linha__descricao {
    margin-left: auto;
  }

  .linha__selo {
    right: auto;
    left: 1.4rem;
  }

  .linha__item--esquerda .linha__selo {
    left: auto;
    right: 1.4rem;
  }
}
</style>
