import testData from '../data/testdata.json';

export async function buildInitCache() {
  let deslocamento = 0;
  let conjunto = 0;
  let rotulo = 0;
  let politica = 0;
  let zero = '0';

  deslocamento = Math.log2(testData.qtd_celulas_bloco_MP);
  conjunto = Math.log2(testData.numero_linhas_CH / testData.linhas_conjuntos_CH);
  rotulo = Math.log2((testData.numero_celulas_MP / testData.qtd_celulas_bloco_MP) / (testData.numero_linhas_CH / testData.linhas_conjuntos_CH));
  politica = 3;

  testData.linha_montada_CH.push({
    "bit_validacao": 0,
    "politica": 0,
    "rotulo": 0,
    "conjunto": 0,
    "valores": new Array(qtd_celulas_bloco_MP).fill(0)
  });
}

export async function dec_to_bho (n, base) {

  if (n < 0) {
    n = 0xFFFFFFFF + n + 1;
  }

  switch (base) {

    case 'B':
      return parseInt(n, 10).toString(2);
      break;

    case 'H':
      return parseInt(n, 10).toString(16);
      break;

    case 'O':
      return parseInt(n, 10).toString(8);
      break;

    default:
      return ("Valor inválido");
  }
}

export async function preencheCache () {
  for (let i = 0; i < numero_linhas_CH; i++) {
    array_CH[i] = { ...linha_montada_CH };
  }
}