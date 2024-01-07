/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while (left < right) {
    const width = right - left
    const currentHeight = Math.min(height[left], height[right])
    const currentArea = width * currentHeight
    maxArea = Math.max(maxArea, currentArea)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }

  }

  return maxArea
};
