// Создаем хэш-таблицу.
// Проходим по массиву.
// На каждом шаге рассчитываем число, которое нужно для достижения target (это target - текущий элемент).
// Проверяем, есть ли это число в хэш-таблице.
// Если да, возвращаем его индекс и индекс текущего элемента.
// Если нет, добавляем текущий элемент и его индекс в хэш-таблицу.

// Time complexity: O(n)

function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

module.exports = twoSum;
