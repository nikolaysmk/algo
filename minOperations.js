/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  let count0 = 0;
  let count1 = 0;

  for (let i in s) {
    if (s[i] !== (i % 2 === 0 ? '0' : '1')) {
      count0++;
    }
    if (s[i] !== (i % 2 === 0 ? '1' : '0')) {
      count1++;
    }
  }

  return Math.min(count0, count1);
};
