/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    let sum = 0
    for (let i=0; i <= n; i++){
        console.log(sum)
        sum += n
    }
    return ('nth num: ', sum)
}

module.exports = fibonacci