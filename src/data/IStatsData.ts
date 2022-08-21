export interface IStatsData {
  leitura: Leitura
  escrita: Escrita
  geral: Geral
}

export interface Leitura {
  acertos: number
  erros: number
  p_acertos: number
  p_erros: number
}

export interface Escrita {
  acertos: number
  erros: number
  p_acertos: number
  p_erros: number
}

export interface Geral {
  acertos: number
  erros: number
  p_acertos: number
  p_erros: number
}
