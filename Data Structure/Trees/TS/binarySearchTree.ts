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

  remove(value: number) {
    if (!this.root) {
      return null;
    }

    let currentNode: NewNode | null = this.root!;
    let parentNode: NewNode | null = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
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
