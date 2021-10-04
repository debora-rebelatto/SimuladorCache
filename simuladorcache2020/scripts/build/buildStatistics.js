export function buildStatistics(hitData) {
  let hits = '<h2>Estatísticas</h2>';
  hits += '<table class="table">';
  hits += '<thead><tr>';
  hits += '<td><strong>Definição</strong></td>';
  hits += '<td><strong>Leitura</strong></td>';
  hits += '<td><strong>Escrita</strong></td>';
  hits += '<td><strong>Geral</strong></td>';
  hits += '</tr></thead>';
  hits += '<tbody>';
  hits += '<tr>';
  hits += '<td>Acertos</td>';
  hits += '<td>' + hitData['read']['acertos'] + '/' + hitData['read']['p_acertos'] + '% </td>';
  hits += '<td>' + hitData['written']['acertos'] + '/' + hitData['written']['p_acertos'] + '% </td>';
  hits += '<td>' + hitData['geral']['acertos'] + '/' + hitData['geral']['p_acertos'] + '% </td>';
  hits += '</tr>';
  hits += '<tr>';
  hits += '<td>Erros</td>';
  hits += '<td>' + hitData['read']['erros'] + '/' + hitData['read']['p_erros'] + '% </td>';
  hits += '<td>' + hitData['written']['erros'] + '/' + hitData['written']['p_erros'] + '% </td>';
  hits += '<td>' + hitData['geral']['erros'] + '/' + hitData['geral']['p_erros'] + '% </td>';
  hits += '</tr>';
  hits += '';
  hits += '</tbody>';
  hits += '</table>';

  $('#hits').html(hits);
}