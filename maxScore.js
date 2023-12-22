// Нам дана строка s, состоящая из нулей и единиц. Необходимо разделить эту строку на две непустые подстроки (левую и правую), чтобы максимизировать "очки".
//
// Очки рассчитываются следующим образом: количество нулей в левой подстроке плюс количество единиц в правой подстроке.
//
// Ваша задача - найти максимально возможное количество очков после разделения строки.
//
// Рассмотрим примеры:
//
// Входные данные: s = "011101"
// Вывод: 5
// Пояснение: Если разделить строку на "0" и "11101", то мы получим 1 (количество нулей в левой части) + 4 (количество единиц в правой части) = 5 очков.
//
// Входные данные: s = "00111"
// Вывод: 5
// Пояснение: Разделив на "00" и "111", получаем 2 (нуля в левой части) + 3 (единицы в правой части) = 5 очков.
//
// Входные данные: s = "1111"
// Вывод: 3
// Пояснение: Лучший вариант - разделить на "1" и "111", что даст 0 (нулей в левой части) + 3 (единицы в правой части) = 3 очка.

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let zero = 0
  let one = 0
  let res = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      one++
    }
  }


  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      zero++
    } else {
      one--
    }

    res = Math.max(res, zero + one)
  }


  return res
};



