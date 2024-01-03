// В банке активированы устройства защиты от краж.
// Вам дан массив двоичных строк bank с индексом 0, представляющий план этажа банка, который является двумерной матрицей m x n.bank[i] представляет собой i - ю строку,
// состоящую из '0' и '1'. '0' означает, что ячейка пуста, а '1' - что в ней установлено устройство безопасности.
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  let totalBeams = 0;
  let prevCount = 0;

  for (let row of bank) {
    let count = row.split('').filter(char => char === '1').length;
    if (count > 0) {
      totalBeams += prevCount * count;
      prevCount = count;
    }
  }

  return totalBeams;
};
