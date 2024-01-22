/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const counts = {};
  let duplicate, missing;

  // Подсчет количества каждого числа
  nums.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  // Нахождение дублированного и пропущенного числа
  for (let i = 1; i <= nums.length; i++) {
    const count = counts[i] || 0;
    if (count === 2) {
      duplicate = i;
    } else if (count === 0) {
      missing = i;
    }
  }

  return [duplicate, missing];
};
