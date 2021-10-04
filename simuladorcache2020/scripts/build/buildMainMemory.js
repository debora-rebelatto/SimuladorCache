import { dec_to_bho } from '../dec_to_bho.js';

export function buildMainMemory(cellsNumberMainMemory, cellsBlockQuantityMainMemory, mainMemory) {
  let mp = '<h2>Memória Principal</h2>';

  mp += '<table class="table" id="mp">';
  mp += '<thead>';
  mp += '<td>Endereço</td>';
  mp += '<td class="text-center">C0</td>';
  mp += '<td class="text-center">C1</td>';
  mp += '<td class="text-center">C2</td>';
  mp += '<td class="text-center">C3</td>';
  mp += '</thead>';
  mp += '<tbody>';

  let qtd_linhas_ram = cellsNumberMainMemory / cellsBlockQuantityMainMemory;

  for (let i = 0; i < qtd_linhas_ram; i++) {
    mp += '<tr>';
    mp += '<td class="endereco" endereco="' + (dec_to_bho(i * 4, 'B')).padStart(7, '0') + '">' + (dec_to_bho(i * 4, 'B')).padStart(7, '0') + '</td>';
    mp += '<td>' + (dec_to_bho(mainMemory[i][0], 'B')).padStart(8, '0') + '</td>';
    mp += '<td>' + (dec_to_bho(mainMemory[i][1], 'B')).padStart(8, '0') + '</td>';
    mp += '<td>' + (dec_to_bho(mainMemory[i][2], 'B')).padStart(8, '0') + '</td>';
    mp += '<td>' + (dec_to_bho(mainMemory[i][3], 'B')).padStart(8, '0') + '</td>';
    mp += '</tr>';
  }

  mp += '</tbody></table>';

  $('#mp').html(mp);
}