import { buildCacheMemory } from './build/buildCacheMemory.js';
import { buildMainMemory } from './build/buildMainMemory.js';
import { buildStatistics } from './build/buildStatistics.js';

export function updateData(
  arrayCH,
  mainMemory,
  cellsNumberMainMemory,
  cellsBlockQuantityMainMemory,
  hitData
) {
  buildCacheMemory(arrayCH);
  buildMainMemory(cellsNumberMainMemory, cellsBlockQuantityMainMemory, mainMemory);
  buildStatistics(hitData);
}