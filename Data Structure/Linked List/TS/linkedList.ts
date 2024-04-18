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
class NewNode {
  value: number;
  next: NewNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: NewNode | null;
  tail: NewNode | null;
  length: number;

  constructor(value: number) {
    this.head = new NewNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: number): void {
    const newNode = new NewNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value: number): void {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array: number[] = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index: number, value: number) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    } else if (index >= this.length) {
      this.append(value);
      return this.printList;
    }

    const newNode = new NewNode(value);
    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index: number) {
    if (index > this.length - 1) {
      return null;
    }

    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader.next;
    leader.next = holdingPointer.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(1);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(4, 88);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.reverse();

console.log(myLinkedList.printList());
