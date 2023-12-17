// Инициализируем два указателя: left (начало массива) и right (конец массива).
// Пока left меньше right, выполняем следующие шаги:
// Находим средний индекс mid.
// Если элемент в позиции mid равен target, возвращаем mid (элемент найден).
// Если элемент в позиции mid меньше target, сдвигаем left на mid + 1.
// В противном случае сдвигаем right на mid.
// Если целевой элемент не найден, left будет указывать на позицию, где должен находиться target. Возвращаем left.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
};
