/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  let maxDiff = 0;

  function dfs(node, minVal, maxVal) {
    if (!node) return;

    // Обновляем максимальную разницу
    maxDiff = Math.max(
      maxDiff,
      Math.abs(minVal - node.val),
      Math.abs(maxVal - node.val),
    );

    // Обновляем минимальное и максимальное значения для дочерних узлов
    minVal = Math.min(minVal, node.val);
    maxVal = Math.max(maxVal, node.val);

    // Рекурсивно идем в дочерние узлы
    dfs(node.left, minVal, maxVal);
    dfs(node.right, minVal, maxVal);
  }

  dfs(root, root.val, root.val);
  return maxDiff;
};
