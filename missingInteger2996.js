/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  while (i < nums.length - 1 && nums[i + 1] === nums[i] + 1) {
    i++;
  }
  let sum = ((nums[0] + nums[i]) * (i + 1)) / 2;
  let x = sum;
  while (nums.includes(x)) {
    x++;
  }

  return x;
};
