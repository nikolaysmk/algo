/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const mid = s.length / 2;
  const a = s.substring(0, mid);
  const b = s.substring(mid);

  return countVowels(a) === countVowels(b);
};

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
