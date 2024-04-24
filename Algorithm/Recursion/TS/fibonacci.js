// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3
//For example: fibonacciRecursive(6) should return 8
function fibonacciIterative(n) {
    var num1 = 0;
    var num2 = 1;
    var fibonacci = 0;
    for (var i = 1; i < n; i++) {
        fibonacci = num1 + num2;
        num1 = num2;
        num2 = fibonacci;
    }
    return fibonacci;
}
function fibonacciRecursive(n) {
    if (n === 0) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(6));
