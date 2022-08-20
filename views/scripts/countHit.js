import { buildStatistics } from './build/buildStatistics.js';

export function countHit(modo, acerto, hitData) {
  let hits = 0;
  let missed = 0;
  let p_hits = 0;
  let p_missed = 0;

  if (modo == 'read') {
    if (hits) {
      hitData['read']['acertos']++;
    } else {
      hitData['read']['erros']++;
    }

    hits = hitData['read']['acertos'];
    missed = hitData['read']['erros'];
    let total = hits + missed;

    if (missed > hits) {
      p_hits = ((hits / total) * 100).toFixed(2);
      p_missed = (100 - p_hits).toFixed(2);
    } else {
      p_missed = ((missed / total) * 100).toFixed(2);
      p_hits = (100 - p_missed).toFixed(2);
    }

    hitData['read']['p_acertos'] = p_hits;
    hitData['read']['p_erros'] = p_missed;
  } else {

    if (hits) {
      hitData['written']['acertos']++;
    } else {
      hitData['written']['erros']++;
    }

    hits = hitData['written']['acertos'];
    missed = hitData['written']['erros'];
    let total = hits + missed;
    if (missed > hits) {
      p_hits = ((hits / total) * 100).toFixed(2);
      p_missed = (100 - p_hits).toFixed(2);
    } else {
      p_missed = ((missed / total) * 100).toFixed(2);
      p_hits = (100 - p_missed).toFixed(2);
    }

    hitData['written']['p_acertos'] = p_hits;
    hitData['written']['p_erros'] = p_missed;
  }

  if (hits) {
    hitData['geral']['acertos']++;
  } else {
    hitData['geral']['erros']++;
  }

  hits = hitData['geral']['acertos'];
  missed = hitData['geral']['erros'];
  let total = hits + missed;
  if (missed > hits) {
    p_hits = ((hits / total) * 100).toFixed(2);
    p_missed = 100 - p_hits;
  } else {
    p_missed = ((missed / total) * 100).toFixed(2);
    p_hits = 100 - p_missed;
  }

  hitData['geral']['p_acertos'] = p_hits;
  hitData['geral']['p_erros'] = p_missed;

  buildStatistics(hitData);
}
