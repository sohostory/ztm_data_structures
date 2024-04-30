var numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function insertionSort(array) {
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (array[0] > array[i]) {
            array.unshift(array.splice(i, 1)[0]);
        }
        else {
            for (var j = 1; j < i; j++) {
                if (array[i] < array[j - 1] && array[i] < array[j]) {
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }
    return array;
}
console.log(insertionSort(numbers));