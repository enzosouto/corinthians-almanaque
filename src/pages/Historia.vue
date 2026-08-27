<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import Timeline from '../components/Timeline.vue'
import ProximaSecao from '../components/ProximaSecao.vue'
import { linhaDoTempo } from '../utils/data'

const destaques = linhaDoTempo.filter((e) => e.importancia === 'fundamental')
</script>

<template>
  <main class="historia">
    <PageHeader
      numero="01"
      titulo="História"
      legenda="Da fundação por operários no Bom Retiro à identidade que atravessa gerações."
    />

    <section class="container historia__corpo">
      <div class="historia__coluna" v-reveal>
        <p class="historia__capitular">
          O <strong>Sport Club Corinthians Paulista</strong> nasceu em 1º de setembro de 1910, fundado por um
          grupo de operários no bairro do Bom Retiro, em São Paulo. O nome é uma homenagem ao Corinthian
          Football Club, equipe amadora inglesa que excursionou pelo Brasil naquele mesmo ano e impressionou
          os fundadores do clube pela conduta esportiva.
        </p>
        <p>
          Desde então, o clube construiu uma identidade única no futebol brasileiro: a de um time nascido do
          povo e para o povo, com uma das torcidas mais numerosas e apaixonadas do país — a Fiel.
        </p>
        <p>
          Um dos capítulos mais importantes dessa história é a <strong>Democracia Corinthiana</strong>,
          movimento do início dos anos 1980 liderado por jogadores como Sócrates, Wladimir e Casagrande, que
          passaram a decidir coletivamente e por voto as questões do dia a dia do clube — um gesto de
          resistência em plena ditadura militar que ultrapassou as quatro linhas e entrou para a história
          política do país.
        </p>
      </div>

      <aside class="historia__lateral panel" v-reveal="120">
        <span class="label">Ficha de fundação</span>
        <dl class="historia__ficha">
          <div>
            <dt class="label">Fundação</dt>
            <dd class="numeral">1910</dd>
          </div>
          <div>
            <dt class="label">Bairro</dt>
            <dd>Bom Retiro, São Paulo</dd>
          </div>
          <div>
            <dt class="label">Cores</dt>
            <dd>Preto e branco</dd>
          </div>
          <div>
            <dt class="label">Torcida</dt>
            <dd>Fiel Torcedor</dd>
          </div>
        </dl>
      </aside>
    </section>

    <section class="container historia__marcos">
      <div class="rule-label"><span>Marcos históricos</span></div>
      <Timeline :eventos="destaques" />
    </section>

    <ProximaSecao />
  </main>
</template>

<style scoped>
.historia__corpo {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding-bottom: 3rem;
}

.historia__capitular::first-letter {
  font-family: var(--font-display);
  font-size: 3.4rem;
  float: left;
  line-height: 0.8;
  padding: 0.1rem 0.4rem 0 0;
  color: var(--gold);
}

.historia__lateral {
  padding: 1.5rem 1.75rem;
  align-self: start;
}

.historia__ficha {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.historia__ficha div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid var(--line);
}

.historia__ficha dt {
  color: var(--ink-faint);
}

.historia__ficha dd {
  margin: 0;
  text-align: right;
}

.historia__marcos {
  padding-bottom: 5rem;
}

@media (min-width: 860px) {
  .historia__corpo {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
