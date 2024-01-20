1. **Array/String - Двоичный поиск:**

   ```javascript
   function binarySearch(arr, target) {
     let left = 0;
     let right = arr.length - 1;

     while (left <= right) {
       let mid = Math.floor((left + right) / 2);
       if (arr[mid] === target) {
         return mid;
       }
       if (arr[mid] < target) {
         left = mid + 1;
       } else {
         right = mid - 1;
       }
     }
     return -1;
   }
   ```

2. **Two Pointers - Поиск пары с заданной суммой:**

   ```javascript
   function twoSum(arr, sum) {
     let i = 0;
     let j = arr.length - 1;

     while (i < j) {
       let currentSum = arr[i] + arr[j];
       if (currentSum === sum) {
         return [i, j];
       }
       if (currentSum < sum) {
         i++;
       } else {
         j--;
       }
     }
     return [-1, -1];
   }
   ```

3. **Sliding Window - Максимальная сумма подмассива заданной длины:**

   ```javascript
   function maxSubarraySum(arr, size) {
     if (size > arr.length) {
       return null;
     }

     let maxSum = 0;
     let tempSum = 0;

     for (let i = 0; i < size; i++) {
       maxSum += arr[i];
     }
     tempSum = maxSum;

     for (let i = size; i < arr.length; i++) {
       tempSum = tempSum - arr[i - size] + arr[i];
       maxSum = Math.max(maxSum, tempSum);
     }

     return maxSum;
   }
   ```

4. **Matrix - Обход в глубину (DFS):**

   ```javascript
   function dfs(matrix, i, j) {
     if (
       i < 0 ||
       i >= matrix.length ||
       j < 0 ||
       j >= matrix[0].length ||
       matrix[i][j] === 0
     ) {
       return;
     }

     matrix[i][j] = 0; // Пометить как посещенный
     dfs(matrix, i + 1, j); // вниз
     dfs(matrix, i - 1, j); // вверх
     dfs(matrix, i, j + 1); // вправо
     dfs(matrix, i, j - 1); // влево
   }
   ```

5. **Hashmap - Отслеживание частоты элементов:**

   ```javascript
   function countFrequencies(arr) {
     let frequencies = new Map();
     for (let num of arr) {
       let count = frequencies.get(num) || 0;
       frequencies.set(num, count + 1);
     }
     return frequencies;
   }
   ```

6. **Intervals - Слияние интервалов:**

   ```javascript
   function mergeIntervals(intervals) {
     if (!intervals.length) return [];

     intervals.sort((a, b) => a[0] - b[0]);

     let result = [intervals[0]];

     for (let i = 1; i < intervals.length; i++) {
       let prev = result[result.length - 1];
       let current = intervals[i];

       if (current[0] <= prev[1]) {
         prev[1] = Math.max(prev[1], current[1]);
       } else {
         result.push(current);
       }
     }
     return result;
   }
   ```

7. **Stack - Проверка баланса скобок:**

```javascript
function isValid(s) {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }

  return stack.length === 0;
}
```

8. **Linked List - Обращение связного списка:**

   ```javascript
   function reverseLinkedList(head) {
     let prev = null;
     let current = head;

     while (current !== null) {
       let next = current.next;
       current.next = prev;
       prev = current;
       current = next;
     }

     return prev;
   }
   ```

1. **Binary Tree General - Обход дерева в глубину (Pre-order Traversal):**

   ```javascript
   function preOrderTraversal(root) {
     if (root === null) return [];
     let stack = [root],
       result = [];

     while (stack.length) {
       let node = stack.pop();
       result.push(node.val);
       if (node.right) stack.push(node.right);
       if (node.left) stack.push(node.left);
     }

     return result;
   }
   ```

1. **Binary Tree BFS - Уровневый обход (Level Order Traversal):**

   ```javascript
   function levelOrder(root) {
     if (root === null) return [];
     let queue = [root],
       result = [];

     while (queue.length) {
       let level = [],
         n = queue.length;
       for (let i = 0; i < n; i++) {
         let node = queue.shift();
         level.push(node.val);
         if (node.left) queue.push(node.left);
         if (node.right) queue.push(node.right);
       }
       result.push(level);
     }

     return result;
   }
   ```

1. **Binary Search Tree - Поиск в бинарном дереве поиска:**

   ```javascript
   function searchBST(root, val) {
     while (root !== null && root.val !== val) {
       root = val < root.val ? root.left : root.right;
     }
     return root;
   }
   ```

1. **Graph General - Обход в глубину (Depth First Search):**

   ```javascript
   function dfs(graph, start) {
     let visited = new Set(),
       result = [];

     function explore(vertex) {
       if (visited.has(vertex)) return;
       visited.add(vertex);
       result.push(vertex);
       for (let neighbor of graph[vertex]) {
         explore(neighbor);
       }
     }

     explore(start);
     return result;
   }
   ```

1. **Graph BFS - Обход в ширину (Breadth First Search):**

   ```javascript
   function bfs(graph, start) {
     let visited = new Set(),
       queue = [start],
       result = [];

     while (queue.length) {
       let vertex = queue.shift();
       if (visited.has(vertex)) continue;
       visited.add(vertex);
       result.push(vertex);
       for (let neighbor of graph[vertex]) {
         if (!visited.has(neighbor)) queue.push(neighbor);
       }
     }

     return result;
   }
   ```

1. **Trie - Реализация префиксного дерева:**

   ```javascript
   class TrieNode {
     constructor() {
       this.children = {};
       this.isEndOfWord = false;
     }
   }

   class Trie {
     constructor() {
       this.root = new TrieNode();
     }

     insert(word) {
       let node = this.root;
       for (let char of word) {
         if (!node.children[char]) {
           node.children[char] = new TrieNode();
         }
         node = node.children[char];
       }
       node.isEndOfWord = true;
     }

     search(word) {
       let node = this.root;
       for (let char of word) {
         if (!node.children[char]) {
           return false;
         }
         node = node.children[char];
       }
       return node.isEndOfWord;
     }
   }
   ```

1. **Backtracking - Генерация всех возможных подмножеств:**

   ```javascript
   function subsets(nums) {
     let res = [];

     function backtrack(start = 0, path = []) {
       res.push([...path]);
       for (let i = start; i < nums.length; i++) {
         path.push(nums[i]);
         backtrack(i + 1, path);
         path.pop();
       }
     }

     backtrack();
     return res;
   }
   ```

1. **Divide & Conquer - Быстрая сортировка:**

   ```javascript
   function quickSort(arr) {
     if (arr.length <= 1) return arr;

     let pivot = arr[0];
     let left = [];
     let right = [];

     for (let i = 1; i < arr.length; i++) {
       arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
     }

     return [...quickSort(left), pivot, ...quickSort(right)];
   }
   ```

1. **Kadane's Algorithm - Максимальная сумма подмассива:**

   ```javascript
   function maxSubArray(nums) {
     let maxCurrent = nums[0];
     let maxGlobal = nums[0];

     for (let i = 1; i < nums.length; i++) {
       maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
       if (maxCurrent > maxGlobal) {
         maxGlobal = maxCurrent;
       }
     }

     return maxGlobal;
   }
   ```

1. **Heap - Построение мин-кучи:**

   ```javascript
   class MinHeap {
     constructor() {
       this.heap = [];
     }

     insert(val) {
       this.heap.push(val);
       this.bubbleUp();
     }

     bubbleUp() {
       let index = this.heap.length - 1;
       const element = this.heap[index];

       while (index > 0) {
         let parentIndex = Math.floor((index - 1) / 2);
         let parent = this.heap[parentIndex];

         if (element >= parent) break;
         this.heap[index] = parent;
         this.heap[parentIndex] = element;
         index = parentIndex;
       }
     }

     extractMin() {
       const min = this.heap[0];
       const end = this.heap.pop();
       if (this.heap.length > 0) {
         this.heap[0] = end;
         this.sinkDown();
       }
       return min;
     }

     sinkDown() {
       let index = 0;
       const length = this.heap.length;
       const element = this.heap[0];

       while (true) {
         let leftChildIndex = 2 * index + 1;
         let rightChildIndex = 2 * index + 2;
         let leftChild, rightChild;
         let swap = null;

         if (leftChildIndex < length) {
           leftChild = this.heap[leftChildIndex];
           if (leftChild < element) {
             swap = leftChildIndex;
           }
         }

         if (rightChildIndex < length) {
           rightChild = this.heap[rightChildIndex];
           if (
             (swap === null && rightChild < element) ||
             (swap !== null && rightChild < leftChild)
           ) {
             swap = rightChildIndex;
           }
         }

         if (swap === null) break;
         this.heap[index] = this.heap[swap];
         this.heap[swap] = element;
         index = swap;
       }
     }

     peek() {
       return this.heap[0];
     }

     size() {
       return this.heap.length;
     }
   }
   ```

- `insert(val)`: Вставляет элемент в кучу.
- `bubbleUp()`: Поднимает элемент до его правильной позиции в куче после вставки.
- `extractMin()`: Удаляет и возвращает минимальный элемент из кучи.
- `sinkDown()`: Восстанавливает свойство кучи после удаления минимального элемента.
- `peek()`: Возвращает минимальный элемент без его удаления.
- `size()`: Возвращает количество элементов в куче.

5. **Bit Manipulation - Нахождение единственного неповторяющегося элемента:**

   ```javascript
   function singleNumber(nums) {
     let result = 0;
     for (let num of nums) {
       result ^= num;
     }
     return result;
   }
   ```

6. **Math - Решение уравнения Фибоначчи:**

   ```javascript
   function fibonacci(n) {
     if (n <= 1) return n;
     let a = 0,
       b = 1;
     for (let i = 2; i <= n; i++) {
       let c = a + b;
       a = b;
       b = c;
     }
     return b;
   }
   ```

7. **1D Dynamic Programming - Подъем по лестнице:**

   ```javascript
   function climbStairs(n) {
     if (n === 1) return 1;
     let dp = [1, 2];
     for (let i = 2; i < n; i++) {
       dp[i] = dp[i - 1] + dp[i - 2];
     }
     return dp[n - 1];
   }
   ```

8. **Multidimensional Dynamic Programming - Уникальные пути в сетке:**

   ```javascript
   function uniquePaths(m, n) {
     let dp = Array.from({ length: m }, () => new Array(n).fill(1));

     for (let i = 1; i < m; i++) {
       for (let j = 1; j < n; j++) {
         dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
       }
     }

     return dp[m - 1][n - 1];
   }
   ```
