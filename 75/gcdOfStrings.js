// Решение с помощью теоримы Евклида
// Найти НОД длин двух строк. НОД длин строк можно найти с помощью алгоритма Евклида.
// Получить НОК длин двух строк. НОК двух чисел a и b можно вычислить как (a * b) / НОД(a, b).
// Проверить, что повторение НОД длин строк str1.length и str2.length раз даёт исходные строки.
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function gcdOfStrings(str1, str2) {
  // Проверяем, совпадают ли строки при конкатенации
  if (str1 + str2 !== str2 + str1) {
    return '';
  }
  // Находим НОД длин строк
  const lenGcd = gcd(str1.length, str2.length);
  // Возвращаем подстроку, равную НОД длин строк
  return str1.substring(0, lenGcd);
}
