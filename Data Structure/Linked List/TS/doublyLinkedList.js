var NewNode = /** @class */ (function () {
    function NewNode(value) {
        this.value = value;
        this.next = null;
    }
    return NewNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(value) {
        this.head = new NewNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    DoublyLinkedList.prototype.printList = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    };
    DoublyLinkedList.prototype.append = function (value) {
        var newNode = new NewNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    };
    DoublyLinkedList.prototype.prepend = function (value) {
        var newNode = new NewNode(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    };
    DoublyLinkedList.prototype.traverseToIndex = function (index) {
        var counter = 0;
        var currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;
            counter++;
        }
        return currentNode;
    };
    DoublyLinkedList.prototype.insert = function (index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        else if (index >= this.length) {
            this.append(value);
            return this.printList();
        }
        var newNode = new NewNode(value);
        var leader = this.traverseToIndex(index - 1);
        var holdingPointer = leader.next;
        newNode.prev = leader;
        leader.next = newNode;
        holdingPointer.prev = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    };
    DoublyLinkedList.prototype.remove = function (index) {
        if (index > this.length - 1) {
            return null;
        }
        var leader = this.traverseToIndex(index - 1);
        var holdingPointer = leader === null || leader === void 0 ? void 0 : leader.next;
        leader.next = holdingPointer === null || holdingPointer === void 0 ? void 0 : holdingPointer.next;
        holdingPointer.prev = leader;
        this.length--;
        return this.printList();
    };
    return DoublyLinkedList;
}());
var myDoublyLinkedList = new DoublyLinkedList(4);
myDoublyLinkedList.append(8);
myDoublyLinkedList.append(12);
myDoublyLinkedList.prepend(2);
myDoublyLinkedList.insert(2, 6);
myDoublyLinkedList.remove(2);
console.log(myDoublyLinkedList.printList());
