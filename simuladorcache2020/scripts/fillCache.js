export function fillCache(linesNumberCH, arrayCH, lineBuildCH) {
  for (let i = 0; i < linesNumberCH; i++) {
    arrayCH[i] = { ...lineBuildCH };
  }
}