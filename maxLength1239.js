/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let maxLen = 0;

  function isUnique(str) {
    const charSet = new Set();
    for (let char of str) {
      if (charSet.has(char)) return false;
      charSet.add(char);
    }
    return true;
  }

  function backtrack(start, current) {
    if (isUnique(current)) {
      maxLen = Math.max(maxLen, current.length);
    }

    for (let i = start; i < arr.length; i++) {
      backtrack(i + 1, current + arr[i]);
    }
  }

  backtrack(0, "");
  return maxLen;
};
