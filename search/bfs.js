// Используйте очередь для отслеживания узлов для посещения.
// Начните с помещения начального узла в очередь.
// Пока очередь не пуста:
// Извлеките узел из очереди.
// Пометьте узел как посещённый или обработайте его.
// Добавьте все соседние узлы, которые ещё не были посещены, в очередь.

function bfs(start, graph) {
  let visited = new Set();
  let queue = [start];

  while (queue.length > 0) {
    let node = queue.shift(); // Извлекаем узел из начала очереди

    if (visited.has(node)) continue; // Если узел уже посещен, пропускаем его

    console.log(node);
    visited.add(node); // Помечаем узел как посещенный

    // Добавляем всех не посещенных соседей в очередь
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

const graph = {
  0: [1, 2],
  1: [0, 3, 4],
  2: [0, 4],
  3: [1, 5],
  4: [1, 2],
  5: [3]
};

bfs(0, graph);

