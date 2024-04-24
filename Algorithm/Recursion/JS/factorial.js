// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //   console.log(number);
  if (number === 2) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);

  return answer;
}

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }

  while (number > 1) {
    answer *= number;
    number--;
  }

  return answer;
}

console.log(findFactorialRecursive(10));
console.log(findFactorialIterative(10));
