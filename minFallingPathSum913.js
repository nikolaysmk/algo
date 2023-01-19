/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let n = matrix.length;

  // Начинаем с предпоследнего ряда и идем вверх
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col < n; col++) {
      // Находим минимальный путь из возможных трех
      let best = matrix[row + 1][col];
      if (col > 0) best = Math.min(best, matrix[row + 1][col - 1]);
      if (col < n - 1) best = Math.min(best, matrix[row + 1][col + 1]);

      // Обновляем текущий элемент
      matrix[row][col] += best;
    }
  }

  // Ищем минимальное значение в первом ряду
  return Math.min(...matrix[0]);
};
