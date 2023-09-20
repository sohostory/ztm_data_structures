// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
    return this;
  }

  append(value) {
    const newNode = new Node(value);
    // console.log("current head: ", this.head);
    // console.log("current tail: ", this.tail);
    this.tail.next = newNode;
    // console.log("updated head: ", this.head);
    // console.log("updated tail", this.tail);
    this.tail = newNode;
    // console.log("new head: ", this.head);
    // console.log("new tail", this.tail);
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    pass;
  }
}

const myLinkedList = new LinkedList(10);
// console.log("created head:");
// console.log(myLinkedList);
myLinkedList.append(5);
// console.log("first append:");
// console.log(myLinkedList);
myLinkedList.append(6);
// console.log("second append:");
// console.log(myLinkedList);
// console.log("next: ", myLinkedList.head.next);
myLinkedList.append(10);
// console.log("third append:");
// console.log(myLinkedList);
// console.log("next: ", myLinkedList.head.next);
myLinkedList.prepend(7);
console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
myLinkedList.insert(99, 90);
console.log(myLinkedList.printList());
// console.log("first prepend:");
// console.log(myLinkedList);
