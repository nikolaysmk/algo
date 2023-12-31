/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  const charHash = new Map()
  let res = -1
  for (let i in s) {
    if (charHash.has(s[i])) {
      res = Math.max(res, i - charHash.get(s[i]) - 1)
    } else {
      charHash.set(s[i], i)
    }
  }

  return res
};
