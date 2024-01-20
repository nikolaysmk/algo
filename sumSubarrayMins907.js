/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let mod = 1e9 + 7;
  let stack = [];
  let result = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      let index = stack.pop();
      let leftIndex = stack.length > 0 ? stack[stack.length - 1] : -1;
      currentSum -= (index - leftIndex) * arr[index];
    }

    stack.push(i);
    currentSum +=
      (i - (stack.length > 1 ? stack[stack.length - 2] : -1)) * arr[i];
    result = (result + currentSum) % mod;
  }

  return result;
};
