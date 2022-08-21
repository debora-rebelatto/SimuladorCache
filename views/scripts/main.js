import { fillCache } from './fillCache.js';
import { updateData } from './updateData.js';
import { readAddress } from './readAddress.js';
import { writeAddress } from './writeAddress.js';
import { projectInfo } from './projectInfo.js';

const cache = function () {
  let cellSize = 8;
  let mainMemory = [];
  let cellsNumberMainMemory = 128;
  let cellsBlockQuantityMainMemory = 4;
  let blockQuantityMainMemory = 0;
  let arrayCH = [];
  let linesNumberCH = 8;
  let linesSetCH = 4;
  let lineBuildCH = [];

  const buildCache = function () {
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

  const fillMP = function () {
    mainMemory = [];
    let qtd_linhas_ram = cellsNumberMainMemory / cellsBlockQuantityMainMemory;
    let block = [];
    for (let i = 0; i < qtd_linhas_ram; i++) {
      block = [];
      block.push(i + 4);
      block.push(i + 9);
      block.push(i + 2);
      block.push(i + 1);
      mainMemory[i] = block;
    }
  }

  return {
    init: function () {
      buildCache(
        cellsBlockQuantityMainMemory,
        linesNumberCH,
        linesSetCH,
        cellsNumberMainMemory
      )
      fillCache(linesNumberCH, arrayCH, lineBuildCH);
      fillMP();
      updateData(arrayCH, mainMemory, cellsNumberMainMemory, cellsBlockQuantityMainMemory, hitData);

      $(document).on('click', '#onClickReadAddress', function (e) {
        e.preventDefault();
        readAddress(
          $("#address").val(),
          'read',
          linesNumberCH,
          linesSetCH,
          arrayCH,
          hitData,
          mainMemory,
          cellsNumberMainMemory,
          cellsBlockQuantityMainMemory,
        );
      });

      $(document).on('click', '#onClickWriteAddress', function (e) {
        e.preventDefault();
        readAddress(
          $('#address').val(),
          'write',
          linesNumberCH,
          linesSetCH,
          arrayCH,
          hitData,
          mainMemory,
          cellsNumberMainMemory,
          cellsBlockQuantityMainMemory,
        );
        writeAddress(
          $('#address').val(),
          linesNumberCH,
          linesSetCH,
          arrayCH,
          mainMemory,
          cellsNumberMainMemory,
          cellsBlockQuantityMainMemory,
          hitData
        );
      });

      $(document).on('click', '#mp td.endereco', function (e) {
        e.preventDefault();
        let obj = $(this);
        $('#endereco').val(obj.attr('endereco'));
      });
		}
	}
}();

window.onload = function () { cache.init(); }
