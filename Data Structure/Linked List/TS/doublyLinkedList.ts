class NewNode {
  value: number;
  prev: NewNode | null;
  next: NewNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: NewNode | null;
  tail: NewNode | null;
  length: number;

  constructor(value: number) {
    this.head = new NewNode(value);
    this.tail = this.head;
    this.length = 1;
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

  append(value: number): void {
    const newNode = new NewNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value: number): void {
    const newNode = new NewNode(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traverseToIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode?.next;
      counter++;
    }

    return currentNode;
  }

  insert(index: number, value: number) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    } else if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    const newNode = new NewNode(value);
    let leader = this.traverseToIndex(index - 1);
    let follower = leader.next;
    newNode.prev = leader;
    leader.next = newNode;
    follower.prev = newNode;
    newNode.next = follower;
    this.length++;
    return this.printList();
  }

  remove(index: number) {
    if (index > this.length - 1) {
      return null;
    }

    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader?.next;
    leader.next = holdingPointer?.next;
    holdingPointer.prev = leader;

    this.length--;
    return this.printList();
  }
}

let myDoublyLinkedList = new DoublyLinkedList(4);
myDoublyLinkedList.append(8);
myDoublyLinkedList.append(12);
myDoublyLinkedList.prepend(2);
myDoublyLinkedList.insert(2, 6);
myDoublyLinkedList.remove(2);

console.log(myDoublyLinkedList.printList());
