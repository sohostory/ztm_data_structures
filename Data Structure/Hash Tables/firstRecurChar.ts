const findFirstRecurringChar = (numArray: number[]): number | undefined => {
  if (numArray.length < 2) {
    return undefined;
  }

  const numbers: { [key: number]: Boolean } = {};

  for (const num of numArray) {
    if (numbers[num]) {
      return num;
    } else {
      numbers[num] = true;
    }
  }
};

console.log(findFirstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
