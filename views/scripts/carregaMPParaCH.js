import { buildInfo } from './build/buildInfo.js';
import { dec_to_bho } from './dec_to_bho.js';

export async function carregaMPParaCH (address, linesNumberCH, linesSetCH, mainMemory, arrayCH) {
  let deslocamento = address.substr(5, 2);
  deslocamento = parseInt(deslocamento, 2);
  let conjunto = address.substr(4, 1);
  let rotulo = address.substr(0, 4);
  let bloco = address.substr(0, 5);
  bloco = parseInt(bloco, 2);
  let bloco_retorno = 0;

  let valores = mainMemory[bloco];

  conjunto = conjunto % (linesNumberCH / linesSetCH);

  let politica = -1;
  let metade = arrayCH.length / 2;
  let indice_sai = 0;
  let bit_validacao = 1;

  if (conjunto == 0) {
    for (let i = 0; i < metade; i++) {
      if (arrayCH[i]['bit_validacao'] == 0) {
        indice_sai = i;
        bit_validacao = 0;
      }

      if (arrayCH[i]['politica'] > politica && bit_validacao == 1) {
        indice_sai = i;
        politica = arrayCH[i]['politica'];

        bloco_retorno = parseInt((arrayCH[i]['rotulo'] + arrayCH[i]['conjunto']), 2);
        mainMemory[bloco_retorno] = arrayCH[i]['valores'];
      }
    }
  } else {

    for (let i = metade; i < arrayCH.length; i++) {
      if (arrayCH[i]['bit_validacao'] == 0) {
        indice_sai = i;
        bit_validacao = 0;
      }

      if (arrayCH[i]['politica'] > politica && bit_validacao == 1) {
        indice_sai = i;
        politica = arrayCH[i]['politica'];

        bloco_retorno = parseInt((arrayCH[i]['rotulo'] + arrayCH[i]['conjunto']), 2);
        mainMemory[bloco_retorno] = arrayCH[i]['valores'];
      }

    }
  }

  let atualiza = {
    politica: 0,
    bit_validacao: 1,
    rotulo: rotulo,
    conjunto: conjunto,
    valores: valores
  }

  arrayCH[indice_sai] = atualiza;
  buildInfo(false, dec_to_bho(bloco, 'B'), arrayCH[indice_sai].valores[deslocamento], conjunto, deslocamento);
}