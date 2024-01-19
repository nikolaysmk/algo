// Вам дан целочисленный массив nums. Вам необходимо создать из nums двумерный массив, удовлетворяющий следующим условиям:
// Двумерный массив должен содержать только элементы массива nums.
// Каждая строка двумерного массива содержит отдельные целые числа.
// Количество строк в двумерном массиве должно быть минимальным.
// Верните полученный массив. Если ответов несколько, верните любой из них.
// Обратите внимание, что в двумерном массиве может быть разное количество элементов в каждой строке.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const elementCount = {};
  const result = [];

  for (const num of nums) {
    elementCount[num] = (elementCount[num] || 0) + 1;
  }
  for (const num of nums) {
    if (elementCount[num] === 0) continue;
    let row = [];
    for (const key in elementCount) {
      if (elementCount[key] > 0) {
        row.push(parseInt(key));
        elementCount[key]--;
      }
    }
    result.push(row);
  }

  return result;
};
