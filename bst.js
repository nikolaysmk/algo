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
    const newNode = new Node(data); // Создаем новый узел

    if (this.root === null) {
      this.root = newNode; // Если дерево пустое, делаем новый узел корнем
    } else {
      this.insertNode(this.root, newNode); // Иначе вызываем функцию для вставки узла
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      // Сравниваем данные нового узла с текущим узлом
      if (node.left === null) {
        node.left = newNode; // Если левый потомок пуст, вставляем туда новый узел
      } else {
        this.insertNode(node.left, newNode); // Иначе рекурсивно вызываем функцию для левого поддерева
      }
    } else {
      if (node.right === null) {
        node.right = newNode; // Если правый потомок пуст, вставляем туда новый узел
      } else {
        this.insertNode(node.right, newNode); // Иначе рекурсивно вызываем функцию для правого поддерева
      }
    }
  }
  search(node, data) {
    if (node === null) return null; // Если узел пуст, возвращаем null

    if (data < node.data) {
      return this.search(node.left, data); // Ищем в левом поддереве
    } else if (data > node.data) {
      return this.search(node.right, data); // Ищем в правом поддереве
    } else {
      return node; // Нашли узел, возвращаем его
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
    if (node.left === null)
      return node; // Наименьший элемент в BST находится в самом левом узле
    else return this.findMinNode(node.left); // Продолжаем искать в левом поддереве
  }
}

module.exports = BinarySearchTree;
