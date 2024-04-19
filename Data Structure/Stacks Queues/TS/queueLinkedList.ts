class NewNode {
  value: string;
  next: NewNode | null;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: NewNode | null;
  last: NewNode | null;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    console.log("peek: ", this.first);
    return this.first;
  }
  enqueue(value) {
    const newNode = new NewNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.length++;
    console.log("enqueue: ", this);
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;
    console.log("dequeue: ", this);
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.peek();
myQueue.dequeue();
//Joy
//Matt
//Pavel
//Samir
