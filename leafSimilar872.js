/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const seq1 = getLeafSequence(root1);
  const seq2 = getLeafSequence(root2);
  return seq1.toString() === seq2.toString();
};

function getLeafSequence(root) {
  let leaves = [];
  function traverse(node) {
    if (!node) return;
    if (!node.left && !node.right) {
      leaves.push(node.val);
    }
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return leaves;
}
