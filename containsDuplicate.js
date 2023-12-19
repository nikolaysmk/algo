/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//   const set = new Set(nums)
//   return set.size !== nums.length
// };
//
// var containsDuplicate = function(nums) {
//   const map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       return true
//     }
//     map.set(nums[i], i)
//   }
//   return false
// };
var containsDuplicate = function(nums) {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
  }
  return false
};
