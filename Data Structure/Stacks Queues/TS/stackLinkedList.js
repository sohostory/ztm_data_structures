var NewNode = /** @class */ (function () {
    function NewNode(value) {
        this.value = value;
        this.next = null;
    }
    return NewNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    Stack.prototype.peek = function () {
        console.log(this.top);
        return this.top;
    };
    Stack.prototype.push = function (value) {
        var newNode = new NewNode(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        }
        else {
            var holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        console.log("pushed: ", this.top);
        return this;
    };
    Stack.prototype.pop = function () {
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
    };
    return Stack;
}());
var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.peek();
myStack.pop();
myStack.pop();
myStack.peek();
