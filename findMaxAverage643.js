/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxAverage = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    let currentAverage = sum / k;
    maxAverage = Math.max(maxAverage, currentAverage);
  }

  return maxAverage;
};
