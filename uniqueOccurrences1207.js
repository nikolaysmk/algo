/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const countMap = {};

  arr.forEach((num) => (countMap[num] = (countMap[num] || 0) + 1));

  const occurrencesSet = new Set();

  for (const count of Object.values(countMap)) {
    if (occurrencesSet.has(count)) {
      return false;
    }
    occurrencesSet.add(count);
  }

  return true;
};
