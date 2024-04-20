var NewNode = /** @class */ (function () {
    function NewNode(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
    return NewNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new NewNode(value);
        if (this.root === null) {
            this.root = newNode;
            console.log("root node added: ", this.root);
            return this;
        }
        var currentPointer = this.root;
        while (currentPointer !== null) {
            if (currentPointer.value > value) {
                if (currentPointer.left === null) {
                    currentPointer.left = newNode;
                    console.log("left node added: ", this);
                    return this;
                }
                else {
                    currentPointer = currentPointer.left;
                }
            }
            else {
                if (currentPointer.right === null) {
                    currentPointer.right = newNode;
                    console.log("right node added: ", this);
                    return this;
                }
                else {
                    currentPointer = currentPointer.right;
                }
            }
        }
        console.log("node added: ", this);
    };
    BinarySearchTree.prototype.lookup = function (value) {
        if (!this.root) {
            return null;
        }
        var currentNode = this.root;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                console.log("node found: ", currentNode);
                return currentNode;
            }
            else if (currentNode.value > value) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        console.log("node not found");
        return null;
    };
    BinarySearchTree.prototype.remove = function (value) { };
    return BinarySearchTree;
}());
var tree = new BinarySearchTree();
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
function traverse(node) {
    if (node === null)
        return null;
    var tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
