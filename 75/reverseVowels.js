/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = 'aeiouAEIOU';
  let vowelArray = [];
  for (let char of s) {
    if (vowels.includes(char)) {
      vowelArray.push(char);
    }
  }
  let result = '';
  for (let char of s) {
    if (vowels.includes(char)) {
      result += vowelArray.pop();
    } else {
      result += char;
    }
  }
  return result;
};
