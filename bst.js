// Для вставки нового элемента в BST, мы начинаем сравнение с корня и двигаемся вниз по дереву.
// Если новое значение меньше текущего узла, мы идем влево, иначе - вправо.
// Процесс продолжается, пока не найдем подходящее место для вставки.

// Поиск элемента в BST
// Поиск элемента в BST начинается с корня и двигается вниз по дереву.
// Если значение поиска меньше значения текущего узла, мы идем влево, иначе - вправо.
// Процесс продолжается, пока не найдем искомое значение или пока не будет достигнут конец дерева.

// Удаление элемента из BST
// Удаление элемента из BST начинается с поиска удаляемого элемента.
// Если элемент найден, мы удаляем его.
// В противном случае, мы ничего не делаем.
// Существует три случая:
// 1. Удаляемый элемент не имеет потомков
// 2. Удаляемый элемент имеет одного потомка
// 3. Удаляемый элемент имеет двух потомков
// В первом случае мы просто удаляем узел.
// Во втором случае мы просто удаляем узел и заменяем его на одного потомка.
// В третьем случае мы заменяем удаляемый узел на его преемника.
// Преемник - это узел, который заменяет удаленный узел.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node === null) return null;

    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // Удаление узла без потомков
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // Удаление узла с одним потомком
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Удаление узла с двумя потомками
      let aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
}
