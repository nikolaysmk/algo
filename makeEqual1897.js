
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
  const map = new Map();

  for (let word of words) {
    for (let s of word) {
      if (map.has(s)) {
        map.set(s, map.get(s) + 1);
      } else {
        map.set(s, 1);
      }
    }
  }

  for (let c of map) {
    if (c[1] % words.length !== 0) {
      return false;
    }
  }
  return true;
};
