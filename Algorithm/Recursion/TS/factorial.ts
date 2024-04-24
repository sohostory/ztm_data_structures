// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
// 5! = 5 * 4 * 3 * 2 * 1

function findFactorialRecursive(number: number): number {
  if (number === 2) {
    return number;
  }

  return findFactorialRecursive(number - 1) * number;
}

function findFactorialIterative(number: number): number {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
