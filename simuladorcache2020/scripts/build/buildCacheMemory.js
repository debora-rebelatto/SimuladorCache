import { dec_to_bho } from '../dec_to_bho.js';

export function buildCacheMemory(arrayCH) {
  let cache = '<h2>Memória Cache</h2>'

  cache += '<table class="table">';
  cache += '<thead>';
  cache += '<td>Valid</td>';
  cache += '<td>Política</td>';
  cache += '<td>Rótulo</td>';
  cache += '<td>Conjunto</td>';
  cache += '<td>V.D. 00</td>';
  cache += '<td>V.D. 01</td>';
  cache += '<td>V.D. 10</td>';
  cache += '<td>V.D. 11</td>';
  cache += '</thead>';
  cache += '<tbody>';

  for (let i = 0; i < arrayCH.length; i++) {
    cache += '<tr ' + (i < 4 ? 'class="bg-secondary text-white"' : 'class="bg-info text-white"') + '>';
    cache += '<td>' + arrayCH[i]['bit_validacao'] + '</td>';
    cache += '<td>' + (dec_to_bho(arrayCH[i]['politica'], 'B')).padStart(3, '0') + '</td>';
    cache += '<td>' + String(arrayCH[i]['rotulo']).padStart(4, '0') + '</td>';
    cache += '<td>' + arrayCH[i]['conjunto'] + '</td>';
    cache += '<td>' + (dec_to_bho(arrayCH[i]['valores'][0], 'B')).padStart(8, '0') + '</td>';
    cache += '<td>' + (dec_to_bho(arrayCH[i]['valores'][1], 'B')).padStart(8, '0') + '</td>';
    cache += '<td>' + (dec_to_bho(arrayCH[i]['valores'][2], 'B')).padStart(8, '0') + '</td>';
    cache += '<td>' + (dec_to_bho(arrayCH[i]['valores'][3], 'B')).padStart(8, '0') + '</td>';
    cache += '</tr>';
  }

  cache += ('</tbody></table>')

  $('#cache').html(cache);
}