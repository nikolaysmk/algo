const twoSum = require("./two-sum");

describe("twoSum", () => {
  test("returns empty array when input array is empty", () => {
    expect(twoSum([], 9)).toEqual([]);
  });

  test("returns empty array when input array has only one element", () => {
    expect(twoSum([2], 9)).toEqual([]);
  });

  test("returns empty array when no two numbers sum up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 100)).toEqual([]);
  });

  test("finds indices that sum up to the target [2, 7, 11, 15], target 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("finds indices that sum up to the target [3, 2, 4], target 6", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("finds indices that sum up to the target [3, 3], target 6", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
