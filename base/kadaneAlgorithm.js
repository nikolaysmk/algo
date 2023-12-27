
function kadaneAlgorithm(array) {
  let maxSoFar = array[0]; // Инициализация максимальной суммы
  let currentMax = array[0]; // Инициализация текущей максимальной суммы

  for (let i = 1; i < array.length; i++) {
    currentMax = Math.max(array[i], currentMax + array[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
}

