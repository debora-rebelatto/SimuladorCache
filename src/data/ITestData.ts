export interface Root {
  tamanho_celula: number
  array_MP: any[]
  numero_celulas_MP: number
  qtd_celulas_bloco_MP: number
  numero_blocos_MP: number
  endereco_MP: number
  bloco_endereco_MP: number
  array_CH: any[]
  numero_linhas_CH: number
  linhas_conjuntos_CH: number
  linha_montada_CH: LinhaMontadaCh[]
}

export interface LinhaMontadaCh {
  bit_validacao: number
  politica: number
  rotulo: number
  conjunto: number
  valores: any[]
}
