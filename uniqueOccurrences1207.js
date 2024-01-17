/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var uniqueOccurrences = function (arr) {
//   const countMap = {};
//
//   arr.forEach((num) => (countMap[num] = (countMap[num] || 0) + 1));
//
//   const occurrencesSet = new Set();
//
//   for (const count of Object.values(countMap)) {
//     if (occurrencesSet.has(count)) {
//       return false;
//     }
//     occurrencesSet.add(count);
//   }
//
//   return true;
// };
//

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const countMap = new Map();

  arr.forEach((num) => {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1);
    } else {
      countMap.set(num, 1);
    }
  });

  const occurrencesSet = new Set();

  for (const [_val, count] of countMap) {
    if (occurrencesSet.has(count)) {
      return false;
    }
    occurrencesSet.add(count);
  }

  return true;
};
