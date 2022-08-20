import { updateData } from './updateData.js';

export function writeAddress(
  endereco,
  linesNumberCH,
  linesSetCH,
  arrayCH,
  mainMemory,
  cellsNumberMainMemory,
  cellsBlockQuantityMainMemory,
  hitData
) {
  let deslocamento = endereco.substr(5, 2);
  deslocamento = parseInt(deslocamento, 2);

  let rotulo = endereco.substr(0, 4);
  let conjunto = endereco.substr(4, 1);
  conjunto = conjunto % (linesNumberCH / linesSetCH);

  let writeValue = $('#write').val();
  if (writeValue.length != 8) {
    alert("Você deve informar um valor com 8 digitos");
    return false;
  }

  writeValue = parseInt(writeValue, 2);
  let valores = [];
  let indice_sai = 0;

  for (let i = 0; i < arrayCH.length; i++) {
    if (arrayCH[i]['conjunto'] == conjunto) {
      if (arrayCH[i]['rotulo'] == rotulo) {
        if (arrayCH[i]['bit_validacao']) {
          indice_sai = i;
        }
      }
    }
  }

  valores = arrayCH[indice_sai]['valores'];
  valores[deslocamento] = writeValue;

  let atualiza = {
    politica: 0,
    bit_validacao: 1,
    rotulo: rotulo,
    conjunto: conjunto,
    valores: valores
  }

  arrayCH[indice_sai] = atualiza;

  updateData(arrayCH, mainMemory, cellsNumberMainMemory, cellsBlockQuantityMainMemory, hitData);
}