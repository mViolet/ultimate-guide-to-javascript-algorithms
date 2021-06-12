// find the sum of all nums between and including two nums passed in as an array [min, max]

//my solution
function rangeSum(arr){
    arr.sort() //sort array
    let sum = 0
    for (let i = arr[0]; i <= arr[1]; i++){
        sum += i
    }
    return sum
}

//fastest solution - using Arithmetic Progression formula
// function rangeSum(arr) {
//     return ((arr[1] - arr[0] + 1) * (arr[0] + arr[1])) / 2
// }

module.exports = rangeSum