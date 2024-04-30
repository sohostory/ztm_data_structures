const numbersarray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergesort(array) {
  if (array.length === 1) {
    return array;
  }
  // split array in into right and left
  const middle = math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let sorted: number[] = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  if (i < left.length) {
    sorted.concat(left.slice(i));
  } else if (j < right.length) {
    sorted.concat(right.slice(j));
  }

  return sorted;
}

const answer = mergeSort(numbersArray);
console.log(answer);
