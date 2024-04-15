const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
  let i = 0;
  let j = 0;
  const mergedArray: number[] = [];

  while (i < arr1.length - 1 && j < arr2.length) {
    if (arr1[i] < arr2[i]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray;
};
