export type ResultadoPartida = 'vitoria' | 'empate' | 'derrota'

export interface Competicao {
  slug: string
  nome: string
  categoria: 'estadual' | 'nacional' | 'continental' | 'mundial' | 'outro'
}

export interface Titulo {
  competicaoSlug: string
  nome: string
  categoria: Competicao['categoria']
  anos: number[]
  observacoes?: Record<string, string>
}

export interface Temporada {
  ano: number
  slug: string
  resumo: string
  tecnico?: string
  artilheiro?: {
    nome: string
    gols?: number
  }
  titulos?: string[]
  jogadoresChave?: string[]
  jogosMarcantes?: {
    data?: string
    descricao: string
  }[]
  fatosHistoricos?: string[]
  imagem?: string
  legendaImagem?: string
  galeria?: {
    imagem: string
    legenda?: string
  }[]
  estatisticas?: {
    jogos?: number
    vitorias?: number
    empates?: number
    derrotas?: number
    golsMarcados?: number
    golsSofridos?: number
    aproveitamento?: number
  }
}

export interface Jogador {
  slug: string
  nome: string
  posicao: string
  periodo: string
  numero?: number
  jogos?: number
  gols?: number
  titulos?: string[]
  descricao: string
  foto?: string
}

export interface EventoLinhaDoTempo {
  ano: number
  titulo: string
  descricao: string
  importancia: 'fundamental' | 'alta' | 'media'
  categoria?: string
}

export interface Partida {
  data: string
  competicao: string
  adversario: string
  placarCorinthians: number
  placarAdversario: number
  resultado: ResultadoPartida
  local?: string
  observacao?: string
}
