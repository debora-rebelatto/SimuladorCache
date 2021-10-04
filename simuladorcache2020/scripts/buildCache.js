export function buildCache(
  cellsBlockQuantityMainMemory,
  linesNumberCH,
  linesSetCH,
  cellsNumberMainMemory
) {
  let deslocamento = 0;
  let conjunto = 0;
  let rotulo = 0;
  let politica = 0;
  let zero = '0';

  deslocamento = Math.log2(cellsBlockQuantityMainMemory);
  conjunto = Math.log2(linesNumberCH / linesSetCH);
  rotulo = Math.log2((cellsNumberMainMemory / cellsBlockQuantityMainMemory) / (linesNumberCH / linesSetCH));
  politica = 3;

  lineBuildCH = {
    bit_validacao: 0,
    politica: 0,
    rotulo: 0,
    conjunto: 0,
    valores: new Array(cellsBlockQuantityMainMemory).fill(0)
  };
}