// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// }
var NewNode = /** @class */ (function () {
    function NewNode(value) {
        this.value = value;
        this.next = null;
    }
    return NewNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = new NewNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    LinkedList.prototype.append = function (value) {
        if (!this.tail)
            return;
        var newNode = new NewNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    };
    LinkedList.prototype.prepend = function (value) {
        var newNode = new NewNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    };
    LinkedList.prototype.printList = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    };
    LinkedList.prototype.insert = function (index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        else if (index >= this.length) {
            this.append(value);
            return this.printList;
        }
        var newNode = new NewNode(value);
        var leader = this.traverseToIndex(index - 1);
        var holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    };
    LinkedList.prototype.traverseToIndex = function (index) {
        var counter = 0;
        var currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    };
    LinkedList.prototype.remove = function (index) {
        if (index > this.length - 1) {
            return null;
        }
        var leader = this.traverseToIndex(index - 1);
        var holdingPointer = leader.next;
        leader.next = holdingPointer.next;
        this.length--;
        return this.printList;
    };
    return LinkedList;
}());
var myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(4, 88);
myLinkedList.insert(20, 88);
myLinkedList.remove(1);
console.log(myLinkedList.printList());
