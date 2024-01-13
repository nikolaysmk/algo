/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const count = {};

  // Подсчитываем частоту каждого символа в строке s
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // Уменьшаем частоту каждого символа в строке t
  for (const char of t) {
    if (count[char]) {
      count[char]--;
    } else {
      // Если символа нет в s или его частота уже 0, увеличиваем шаги
      count[char] = (count[char] || 0) - 1;
    }
  }

  // Считаем общее количество шагов
  let steps = 0;
  for (const char in count) {
    if (count[char] < 0) {
      steps -= count[char];
    }
  }

  return steps;
};
