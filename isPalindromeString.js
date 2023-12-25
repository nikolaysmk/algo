/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const clean = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  let left = 0
  let right = clean.length - 1

  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false
    }
    left++
    right--
  }


  return true
};
