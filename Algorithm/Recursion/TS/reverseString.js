function reversedString(str) {
    var arrayStr = str.split("");
    var reversedArray = [];
    function addToArray(array) {
        if (array.length > 0) {
            reversedArray.push(array.pop());
            addToArray(array);
        }
        return;
    }
    addToArray(arrayStr);
    return reversedArray.join("");
}
console.log(reversedString("yoyo master"));
function reverseStringRecursive(str) {
    if (str === "") {
        return "";
    }
    else {
        return reverseStringRecursive(str.substring(1)) + str.charAt(0);
    }
}
console.log(reverseStringRecursive("yoyo master"));
