/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//   if (s.length !== t.length) return false
//   const s1 = s.split("").sort().join("")
//   const t1 = t.split("").sort().join("")
//   return s1 === t1
//
// };


var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const hash = {}
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]] += 1
    }
    else {
      hash[s[i]] = 1
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (hash[t[i]]) {
      if (hash[t[i]] > 0) {
        hash[t[i]] -= 1
      }
      else {
        return false
      }
    }

    else {
      return false
    }
  }
  return true

};
