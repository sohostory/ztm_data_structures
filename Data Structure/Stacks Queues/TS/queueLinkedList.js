var NewNode = /** @class */ (function () {
    function NewNode(value) {
        this.value = value;
        this.next = null;
    }
    return NewNode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    Queue.prototype.peek = function () {
        console.log("peek: ", this.first);
        return this.first;
    };
    Queue.prototype.enqueue = function (value) {
        var newNode = new NewNode(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        console.log("enqueue: ", this);
        return this;
    };
    Queue.prototype.dequeue = function () {
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
    };
    return Queue;
}());
var myQueue = new Queue();
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
