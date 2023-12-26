/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
  const MOD = 1000000007;
  let dp = Array.from({ length: n + 1 }, () => new Array(target + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      for (let m = 1; m <= k; m++) {
        if (j - m >= 0) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - m]) % MOD;
        }
      }
    }
  }

  return dp[n][target];
};
