/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function closeStrings(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const countChars = (word) => {
    const count = {};
    for (const char of word) {
      count[char] = (count[char] || 0) + 1;
    }
    return count;
  };

  const word1Count = countChars(word1);
  const word2Count = countChars(word2);

  const word1Chars = new Set(Object.keys(word1Count));
  const word2Chars = new Set(Object.keys(word2Count));

  if (word1Chars.size !== word2Chars.size) {
    return false;
  }

  for (const char of word1Chars) {
    if (!word2Chars.has(char)) {
      return false;
    }
  }

  const word1Frequencies = Object.values(word1Count).sort((a, b) => a - b);
  const word2Frequencies = Object.values(word2Count).sort((a, b) => a - b);

  for (let i = 0; i < word1Frequencies.length; i++) {
    if (word1Frequencies[i] !== word2Frequencies[i]) {
      return false;
    }
  }

  return true;
}
