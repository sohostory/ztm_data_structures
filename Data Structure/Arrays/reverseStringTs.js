function reverseStr(str) {
    var strArray = str.split("");
    var newArray = [];
    for (var i = strArray.length - 1; i >= 0; i--) {
        newArray.push(strArray[i]);
    }
    return newArray.join("");
}
console.log(reverseStr("hello"));
