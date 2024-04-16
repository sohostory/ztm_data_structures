var findFirstRecurringChar = function (numArray) {
    if (numArray.length < 2) {
        return undefined;
    }
    var numbers = {};
    for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
        var num = numArray_1[_i];
        if (numbers[num]) {
            return num;
        }
        else {
            numbers[num] = true;
        }
    }
};
console.log(findFirstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
