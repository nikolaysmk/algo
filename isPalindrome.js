/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     if(x<0) return false
//     const str = x.toString()

//     const reverseStr = str.split("").reverse().join("")

//     return str === reverseStr
// };

const isPalindrome = (x) => {
  // Отрицательные числа и числа, оканчивающиеся на 0 (кроме самого 0), не являются палиндромами

  if (x < 0 || (x % 10 === 0 && x != 0)) return false;

  let reversed = 0;

  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  // Проверяем, равна ли перевернутая часть оставшейся части числа или, если число нечетное, игнорируем среднюю цифру
  return x === reversed || x === Math.floor(reversed / 10);
};
