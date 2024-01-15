/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let wins = new Set();
  let losses = new Map();

  // Подсчет побед и проигрышей
  for (let [winner, loser] of matches) {
    wins.add(winner);
    losses.set(loser, (losses.get(loser) || 0) + 1);
  }

  let undefeated = [];
  let oneLoss = [];

  // Находим игроков, не проигравших ни разу
  for (let winner of wins) {
    if (!losses.has(winner)) {
      undefeated.push(winner);
    }
  }

  // Находим игроков, проигравших ровно один раз
  for (let [loser, lossCount] of losses) {
    if (lossCount === 1) {
      oneLoss.push(loser);
    }
  }

  // Сортируем результаты
  return [undefeated.sort((a, b) => a - b), oneLoss.sort((a, b) => a - b)];
};
