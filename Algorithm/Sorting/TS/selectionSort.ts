const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array: number[]) {
  let smallestIndex: number;
  let temp: number;

  for (let i = 0; i < array.length; i++) {
    smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[smallestIndex] > array[j]) {
        smallestIndex = j;
      }
    }
    temp = array[smallestIndex];
    array[smallestIndex] = array[i];
    array[i] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));
