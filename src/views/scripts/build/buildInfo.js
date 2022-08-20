import { dec_to_bho } from '../dec_to_bho.js';

export function buildInfo(encontrado_cache, bloco, valor, conjunto, deslocamento) {
  let info = '<div><h3 class="display-12">Informações</h3>';
  info += '<hr class="my-12">';
  info += '<div class="row"><div class="col-md-4">';
  info += '<p><strong>Encontrado na Cache:</strong> ' + (encontrado_cache ? 'Sim' : 'Não') + '</p>';
  info += '<p><strong>Bloco:</strong> ' + bloco + '</p>';
  info += '</div><div class="col-md-4">';
  info += '<p><strong>Conjunto: </strong>' + conjunto + '</p>';
  info += '<p><strong>Deslocamento: </strong>' + dec_to_bho(deslocamento, 'B') + '</p>';
  info += '</div>';
  info += '<div class="col-md-4">';
  info += '<p><strong>Valor no Campo: </strong>' + dec_to_bho(valor, 'B') + '</p>';
  info += '</div>';
  info += '</div>';

  $('#infos').html(info);
}