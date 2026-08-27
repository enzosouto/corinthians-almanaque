<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import ProximaSecao from '../components/ProximaSecao.vue'
import { titulos, totalTitulos } from '../utils/data'
</script>

<template>
  <main class="titulos">
    <PageHeader
      numero="03"
      titulo="Títulos"
      :legenda="`${totalTitulos()} conquistas catalogadas neste almanaque, do Mundial ao Estadual.`"
    />

    <section class="container titulos__grupos">
      <article v-for="(t, gi) in titulos" :key="t.competicaoSlug" class="titulos__grupo" v-reveal="gi * 60">
        <header class="titulos__cabecalho">
          <h2 class="titulos__nome">{{ t.nome }}</h2>
          <span class="stamp">{{ t.anos.length }} {{ t.anos.length === 1 ? 'título' : 'títulos' }}</span>
        </header>

        <ul class="titulos__selos">
          <li v-for="ano in t.anos" :key="ano" class="titulos__selo" :title="t.observacoes?.[ano] ?? ''">
            <span class="numeral">{{ ano }}</span>
          </li>
        </ul>

        <ul v-if="t.observacoes" class="titulos__notas">
          <li v-for="(nota, ano) in t.observacoes" :key="ano">
            <span class="text-gold numeral">{{ ano }}</span> — {{ nota }}
          </li>
        </ul>
      </article>
    </section>

    <ProximaSecao />
  </main>
</template>

<style scoped>
.titulos__grupos {
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.titulos__grupo {
  padding-top: 2rem;
  border-top: 1px solid var(--line);
}

.titulos__cabecalho {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.titulos__nome {
  font-size: clamp(1.4rem, 3.6vw, 1.9rem);
}

.titulos__selos {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.titulos__selo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  border: 1.5px dashed var(--line-strong);
  background: radial-gradient(circle at 35% 30%, var(--paper-raised), var(--paper));
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.titulos__selo:nth-child(odd) {
  transform: rotate(-4deg);
}
.titulos__selo:nth-child(even) {
  transform: rotate(3deg);
}

.titulos__selo:hover {
  border-color: var(--bordo-bright);
  transform: rotate(0deg) scale(1.05);
}

.titulos__selo .numeral {
  font-size: 0.95rem;
  color: var(--ink-dim);
}

.titulos__notas {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--ink-dim);
  max-width: 68ch;
}
</style>
