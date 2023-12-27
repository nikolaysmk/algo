/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
  let totalTime = 0;
  let maxTimeInGroup = 0
  let currntTime = 0

  for (let i in colors) {
    if (i > 0 && colors[i] !== colors[i - 1]) {
      totalTime += currntTime - maxTimeInGroup
      currntTime = 0
      maxTimeInGroup = 0
    }
    currntTime += neededTime[i]
    maxTimeInGroup = Math.max(maxTimeInGroup, neededTime[i])
  }
  totalTime += currntTime - maxTimeInGroup;

  return totalTime
};
