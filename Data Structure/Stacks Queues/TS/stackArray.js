var Stack = /** @class */ (function () {
    function Stack() {
        this.array = [];
    }
    Stack.prototype.peek = function () {
        return this.array[this.array.length - 1];
    };
    Stack.prototype.push = function (value) {
        this.array.push(value);
        return this;
    };
    Stack.prototype.pop = function () {
        this.array.pop();
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
console.log(myStack.pop());
console.log(myStack.peek());
