/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let hashMap = new Map();

  for (let num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      hashMap.set(stack.pop(), num);
    }
    stack.push(num);
  }

  while (stack.length > 0) {
    hashMap.set(stack.pop(), -1);
  }
  let result = nums1.map((num) => hashMap.get(num));

  return result;
};
