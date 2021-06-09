/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

//recursion
function fibonacci(n) {
    if (n <= 1) return 1
    return fibonacci(n - 1) + fibonacci(n - 2) //sum of last two sums
}

module.exports = fibonacci