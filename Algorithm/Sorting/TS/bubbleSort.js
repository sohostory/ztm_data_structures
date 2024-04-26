var numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array) {
    var arrLength = array.length;
    for (var i = 0; i < arrLength; i++) {
        for (var j = 0; j < arrLength; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
bubbleSort(numbers);
console.log(numbers);
