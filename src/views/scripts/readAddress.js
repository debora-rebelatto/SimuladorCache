import { countHit } from './countHit.js';
import { carregaMPParaCH } from './carregaMPParaCH.js';
import { updateData } from './updateData.js';
import { buildInfo } from './build/buildInfo.js';

export function readAddress(
  address,
  operacao,
  linesNumberCH,
  linesSetCH,
  arrayCH, 
  hitData,
  mainMemory,
  cellsNumberMainMemory,
  cellsBlockQuantityMainMemory,
) {
  if (address.length != 7) {
    alert("Você deve informar um endereço com 7 digitos");
    return false;
  }

  let deslocamento = address.substr(5, 2);
  deslocamento = parseInt(deslocamento, 2);
  let conjunto = address.substr(4, 1);
  let rotulo = address.substr(0, 4);
  let bloco = address.substr(0, 5);

  conjunto = conjunto % (linesNumberCH / linesSetCH);

  let metade = arrayCH.length / 2;

  if (conjunto == 0) {
    for (let i = 0; i < metade; i++) {
      if (arrayCH[i]['rotulo'] == rotulo) {
        if (arrayCH[i]['bit_validacao']) {
          countHit(operacao, true, hitData);
          buildInfo(true, bloco, arrayCH[i].valores[deslocamento], conjunto, deslocamento);
          return false;
        }
      }
    }

    for (let i = 0; i < metade; i++) {
      arrayCH.politica = parseInt(arrayCH[i].politica);
      arrayCH[i].politica++;
    }

  } else {

    for (let i = metade; i < arrayCH.length; i++) {
      if (arrayCH[i]['rotulo'] == rotulo) {
        if (arrayCH[i]['bit_validacao']) {
          countHit(operacao, true, hitData);
          buildInfo(true, bloco, arrayCH[i].valores[deslocamento], conjunto, deslocamento);
          return false;
        }
      }
    }

    for (let i = metade; i < arrayCH.length; i++) {
      arrayCH.politica = parseInt(arrayCH[i].politica);
      arrayCH[i].politica++;
    }
  }

  countHit(operacao, false, hitData);
  carregaMPParaCH(address, linesNumberCH, linesSetCH, mainMemory, arrayCH);

  updateData(arrayCH, mainMemory, cellsNumberMainMemory, cellsBlockQuantityMainMemory, hitData);
}