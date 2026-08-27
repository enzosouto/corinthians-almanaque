import seasonsRaw from '../data/seasons.json'
import playersRaw from '../data/players.json'
import titlesRaw from '../data/titles.json'
import timelineRaw from '../data/timeline.json'
import matchesRaw from '../data/matches.json'
import type { Temporada, Jogador, Titulo, EventoLinhaDoTempo, Partida } from '../types'

export const temporadas = (seasonsRaw as Temporada[]).slice().sort((a, b) => a.ano - b.ano)
export const jogadores = playersRaw as Jogador[]
export const titulos = titlesRaw as Titulo[]
export const linhaDoTempo = (timelineRaw as EventoLinhaDoTempo[]).slice().sort((a, b) => a.ano - b.ano)
export const partidas = matchesRaw as Partida[]

export function temporadaPorAno(ano: string | number): Temporada | undefined {
  return temporadas.find((t) => String(t.ano) === String(ano))
}

export function jogadorPorSlug(slug: string): Jogador | undefined {
  return jogadores.find((j) => j.slug === slug)
}

export function totalTitulos(): number {
  return titulos.reduce((soma, t) => soma + t.anos.length, 0)
}
