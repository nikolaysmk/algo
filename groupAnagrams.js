/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const hash = {}
  for (let i = 0; i < strs.length; i++) {
    const str = uni(strs[i])

    if (!hash[str]) {
      hash[str] = []
    }
    hash[str].push(strs[i])
  }

  return Object.values(hash)
};

const uni = (str) => str.split("").sort().join("")
