// Начинаем обход с узла (вершины) графа.
// Помечаем узел как посещённый.
// Для каждого соседнего узла, который еще не был посещен, рекурсивно применяем DFS.
function dfs(node, visited, graph) {
  if (visited[node]) return; // Если узел уже посещен, возвращаемся

  visited[node] = true; // Помечаем узел как посещенный
  console.log(node);

  // Рекурсивно посещаем всех соседей
  const neighbors = graph[node];
  for (let i = 0; i < neighbors.length; i++) {
    dfs(neighbors[i], visited, graph);
  }
}
// const graph = {
//     0: [1, 2],
//     1: [0, 3, 4],
//     2: [0, 4],
//     3: [1, 5],
//     4: [1, 2],
//     5: [3]
// };
// const visited = {};
// dfs(0, visited, graph);
