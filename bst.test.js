const BinarySearchTree = require("./bst.js");

describe("Binary Search Tree", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test("insert data into the BST", () => {
    bst.insert(10);
    bst.insert(20);
    bst.insert(5);
    expect(bst.root.data).toBe(10);
    expect(bst.root.right.data).toBe(20);
    expect(bst.root.left.data).toBe(5);
  });

  test("search for data in the BST", () => {
    bst.insert(10);
    bst.insert(20);
    bst.insert(5);
    const foundNode = bst.search(bst.root, 20);
    expect(foundNode.data).toBe(20);
  });

  test("search for data not in the BST", () => {
    bst.insert(10);
    bst.insert(20);
    bst.insert(5);
    const foundNode = bst.search(bst.root, 30);
    expect(foundNode).toBeNull();
  });

  test("remove leaf node from the BST", () => {
    bst.insert(10);
    bst.insert(20);
    bst.insert(5);
    bst.remove(5);
    expect(bst.root.left).toBeNull();
  });

  test("remove node with one child from the BST", () => {
    bst.insert(10);
    bst.insert(20);
    bst.insert(5);
    bst.insert(15);
    bst.remove(20);
    expect(bst.root.right.data).toBe(15);
  });

  test("remove node with two children from the BST", () => {
    bst.insert(10);
    bst.insert(20);
    bst.insert(5);
    bst.insert(15);
    bst.insert(25);
    bst.remove(20);
    expect(bst.root.right.data).toBe(25);
    expect(bst.root.right.left.data).toBe(15);
  });
});
