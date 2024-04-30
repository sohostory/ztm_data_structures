var numbersArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    // split array in into right and left
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var i = 0;
    var j = 0;
    var sorted = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        }
        else {
            sorted.push(right[j]);
            j++;
        }
    }
    return sorted.concat(left.slice(i).concat(right.slice(j)));
}
var answer = mergeSort(numbersArray);
console.log(answer);
