class NewNode {
  value: number;
  next: NewNode | null;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: NewNode | null;
  bottom: NewNode | null;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log(this.top);
    return this.top;
  }

  push(value: number) {
    const newNode = new NewNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    console.log("pushed: ", this.top);
    return this;
  }

  pop() {
    if (!this.top) {
      console.log("stack is empty");
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    console.log("popped: ", this.top);
    this.top = this.top.next;

    this.length--;
    return this;
  }

  //isEmpty
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.peek();
myStack.pop();
myStack.pop();
myStack.peek();
