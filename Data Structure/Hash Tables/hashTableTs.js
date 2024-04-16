var HashTable = /** @class */ (function () {
    function HashTable(size) {
        this.data = new Array(size);
    }
    HashTable.prototype._hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };
    HashTable.prototype.set = function (key, value) {
        var address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    };
    HashTable.prototype.get = function (key) {
        var address = this._hash(key);
        var currentBucket = this.data[address];
        if (currentBucket) {
            for (var i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    };
    return HashTable;
}());
var myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable);
console.log(myHashTable.get("apples"));
