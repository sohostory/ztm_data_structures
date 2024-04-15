function reverseStr(str) {
    if (!str || str.length < 2) {
        return "not a valid input";
    }
    var strArray = str.split("");
    var newArray = [];
    for (var i = strArray.length - 1; (i = 0); i--) {
        newArray.push(strArray[i]);
    }
    return newArray.join("");
}
console.log(reverseStr(""));
console.log(reverseStr("hello"));
