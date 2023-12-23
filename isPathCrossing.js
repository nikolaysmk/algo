/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  const directions = {
    "N": [0, 1],
    "S": [0, -1],
    "E": [1, 0],
    "W": [-1, 0],
  };

  let visited = new Set(["0,0"]);
  let x = 0, y = 0;

  for (let i = 0; i < path.length; i++) {
    x += directions[path[i]][0];
    y += directions[path[i]][1];

    let currentPos = `${x},${y}`;
    if (visited.has(currentPos)) {
      return true;
    }
    visited.add(currentPos);
  }

  return false;
};
