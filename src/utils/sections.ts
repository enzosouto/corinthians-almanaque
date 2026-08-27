export interface Secao {
  numero: string
  titulo: string
  legenda: string
  rota: string
}

export const secoes: Secao[] = [
  { numero: '01', titulo: 'História', legenda: 'Fundação, cultura e identidade', rota: '/historia' },
  { numero: '02', titulo: 'Temporadas', legenda: 'Campanhas ano a ano', rota: '/temporadas' },
  { numero: '03', titulo: 'Títulos', legenda: 'As conquistas do clube', rota: '/titulos' },
  { numero: '04', titulo: 'Ídolos', legenda: 'Fichas dos grandes jogadores', rota: '/idolos' },
  { numero: '05', titulo: 'Grandes Momentos', legenda: 'Linha do tempo histórica', rota: '/momentos' },
]
