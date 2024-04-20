class NewNode {
  left: NewNode | null;
  right: NewNode | null;
  value: number;
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  root: NewNode | null;
  constructor() {
    this.root = null;
  }
  insert(value: number) {
    const newNode = new NewNode(value);
    if (this.root === null) {
      this.root = newNode;
      console.log("root node added: ", this.root);
      return this;
    }

    let currentPointer: NewNode | null = this.root;
    while (currentPointer) {
      if (currentPointer.value > value) {
        if (!currentPointer.left) {
          currentPointer.left = newNode;
          console.log("left node added: ", this);
          return this;
        } else {
          currentPointer = currentPointer.left;
        }
      } else {
        if (!currentPointer.right) {
          currentPointer.right = newNode;
          console.log("right node added: ", this);
          return this;
        } else {
          currentPointer = currentPointer.right;
        }
      }
    }
    console.log("node added: ", this);
  }
  lookup(value: number) {
    if (!this.root) {
      return null;
    }
    let currentNode: NewNode | null = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        console.log("node found: ", currentNode);
        return currentNode;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    console.log("node not found");
    return null;
  }

  remove(value: number) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node: NewNode) {
  if (node === null) return null;

  const tree: any = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
