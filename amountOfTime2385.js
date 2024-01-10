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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  if (!root) return 0;

  // Построение графа соседних узлов
  let graph = new Map();
  buildGraph(root, graph);

  // BFS для моделирования процесса инфекции
  let minutes = 0;
  let queue = [start];
  let visited = new Set([start]);

  while (queue.length > 0) {
    let size = queue.length;
    let spread = false;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      for (let neighbor of graph.get(node)) {
        if (!visited.has(neighbor.val)) {
          queue.push(neighbor.val);
          visited.add(neighbor.val);
          spread = true;
        }
      }
    }

    if (spread) minutes++;
  }

  return minutes;
};

function buildGraph(node, graph, parent = null) {
  if (!node) return;
  if (!graph.has(node.val)) graph.set(node.val, []);
  if (parent) {
    graph.get(node.val).push(parent);
    graph.get(parent.val).push(node);
  }
  buildGraph(node.left, graph, node);
  buildGraph(node.right, graph, node);
}
