/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s === "") return true
  let sIndex = 0, tIndex = 0;

  while (tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
      if (sIndex === s.length) {
        return true;
      }
    }
    tIndex++;
  }

  return false;
};
