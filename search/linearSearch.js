
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Возвращаем индекс найденного элемента
    }
  }
  return -1; // Элемент не найден
}
