// Вам даны две строки word1 и word2. Объедините строки, добавляя буквы в чередующемся порядке, начиная со слова1. 
// Если одна из строк длиннее другой, добавьте дополнительные буквы в конец объединенной строки.
// Верните объединенную строку.


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let res = []

  const maxLength = Math.max(word1.length, word2.length)

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      res.push(word1[i])
    }
    if (i < word2.length) {
      res.push(word2[i])
    }
  }

  return res.join("")
};
