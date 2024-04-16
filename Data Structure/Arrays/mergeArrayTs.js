var mergeSortedArrays = function (arr1, arr2) {
    var i = 0;
    var j = 0;
    var mergedArray = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
};
var arr1 = [1, 3, 5, 7];
var arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));
