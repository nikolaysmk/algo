//Инициализируем указатель insertPos в начале массива.
//Проходим по массиву nums.
// Если текущий элемент не равен val, перемещаем его на позицию insertPos и увеличиваем insertPos.
// В конце функция возвращает insertPos, который является количеством элементов, не равных val.
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
  let insertPos = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[insertPos] = nums[i]
      insertPos++
    }
  }
  return insertPos
};
