<script setup lang="ts">
import { ChevronDown } from '@lucide/vue'
import logo from '../assets/logo.png'
import logoMono from '../assets/logo-monograma.png'
import { linhaDoTempo, totalTitulos, jogadores } from '../utils/data'

const decadas = linhaDoTempo.filter((e) => e.importancia !== 'media')
const totalTit = totalTitulos()
</script>

<template>
  <main class="capa">
    <img :src="logoMono" alt="" class="capa__marca-dagua" aria-hidden="true" />

    <section class="capa__hero container">
      <p class="eyebrow">Sport Club Corinthians Paulista · Est. 1910</p>

      <img :src="logo" alt="Escudo do Corinthians" class="capa__escudo" v-reveal />

      <h1 class="capa__titulo" v-reveal="80">CORINTHIANS<br />ALMANAQUE</h1>

      <p class="capa__subtitulo" v-reveal="160">
        A história do Timão em temporadas, números e memórias.
      </p>

      <div class="capa__stats" v-reveal="220">
        <div class="capa__stat">
          <span class="numeral capa__stat-num">1910</span>
          <span class="label">Fundação</span>
        </div>
        <div class="capa__stat">
          <span class="numeral capa__stat-num">{{ totalTit }}</span>
          <span class="label">Títulos no álbum</span>
        </div>
        <div class="capa__stat">
          <span class="numeral capa__stat-num">{{ jogadores.length }}</span>
          <span class="label">Ídolos catalogados</span>
        </div>
      </div>

      <router-link to="/indice" class="btn btn--solid capa__cta" v-reveal="280">
        Abrir Almanaque
      </router-link>

      <ChevronDown class="capa__seta" :size="20" :stroke-width="1.2" />
    </section>

    <section class="capa__linha container">
      <div class="rule-label"><span>Linha histórica</span></div>
      <ol class="capa__decadas">
        <li v-for="d in decadas" :key="`${d.ano}-${d.titulo}`" class="capa__decada" v-reveal>
          <router-link to="/momentos" class="capa__decada-link">
            <span class="numeral">{{ d.ano }}</span>
            <span class="label">{{ d.titulo }}</span>
          </router-link>
        </li>
      </ol>
    </section>
  </main>
</template>

<style scoped>
.capa {
  position: relative;
  min-height: 100vh;
  padding-top: 6rem;
  overflow: hidden;
}

.capa__marca-dagua {
  position: absolute;
  top: -10%;
  right: -12%;
  width: 60vw;
  max-width: 640px;
  opacity: 0.06;
  filter: grayscale(1);
  pointer-events: none;
}

.capa__hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 4rem;
}

.capa__escudo {
  width: 108px;
  height: auto;
  margin: 1.75rem 0 1.5rem;
  filter: drop-shadow(0 6px 22px rgba(0, 0, 0, 0.65));
}

.capa__titulo {
  font-size: clamp(2.6rem, 9vw, 5.6rem);
  line-height: 1.02;
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

.capa__subtitulo {
  margin-top: 1.4rem;
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(1rem, 2.4vw, 1.3rem);
  color: var(--ink-dim);
  max-width: 32ch;
}

.capa__stats {
  display: flex;
  gap: 2.5rem;
  margin-top: 2.75rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.capa__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.capa__stat-num {
  font-size: 1.6rem;
  color: var(--gold);
}

.capa__cta {
  margin-top: 2.75rem;
}

.capa__seta {
  margin-top: 3rem;
  color: var(--ink-faint);
  animation: flutuar 2.4s ease-in-out infinite;
}

@keyframes flutuar {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(8px);
    opacity: 1;
  }
}

.capa__linha {
  position: relative;
  padding-bottom: 4rem;
}

.capa__decadas {
  display: flex;
  flex-direction: column;
}

.capa__decada {
  border-bottom: 1px solid var(--line);
}

.capa__decada:first-child {
  border-top: 1px solid var(--line);
}

.capa__decada-link {
  display: flex;
  align-items: baseline;
  gap: 1.1rem;
  padding: 0.9rem 0;
  transition: color 0.3s ease, padding-left 0.3s ease;
}

.capa__decada-link:hover {
  color: var(--bordo-bright);
  padding-left: 0.4rem;
}

.capa__decada-link .numeral {
  font-size: 1.15rem;
  color: var(--gold);
  flex: 0 0 auto;
  min-width: 3.6ch;
}

@media (max-width: 560px) {
  .capa {
    padding-top: 5rem;
  }
  .capa__stats {
    gap: 1.5rem;
  }
}

/* telas maiores: volta a ser uma faixa horizontal, como uma régua de época */
@media (min-width: 700px) {
  .capa__decadas {
    flex-direction: row;
    overflow-x: auto;
    gap: 0;
    scrollbar-width: none;
    padding-bottom: 0.5rem;
  }

  .capa__decadas::-webkit-scrollbar {
    display: none;
  }

  .capa__decada {
    flex: 0 0 auto;
    border-left: 1px solid var(--line);
    border-bottom: none;
    padding: 0 1.75rem;
  }

  .capa__decada:first-child {
    padding-left: 0;
    border-left: none;
    border-top: none;
  }

  .capa__decada-link {
    flex-direction: column;
    gap: 0.4rem;
    white-space: nowrap;
    padding: 0;
  }

  .capa__decada-link:hover {
    padding-left: 0;
  }
}
</style>
