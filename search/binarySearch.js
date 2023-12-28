function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
      return mid; // Элемент найден
    } else if (midValue < target) {
      left = mid + 1; // Искать в правой половине
    } else {
      right = mid - 1; // Искать в левой половине
    }
  }

  return -1; // Элемент не найден
}

