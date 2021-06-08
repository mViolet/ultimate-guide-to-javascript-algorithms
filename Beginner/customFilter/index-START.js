// Return the first element from the given array that passes the 
// test specified by the provided function.
// Both the array and function are passed into the function 
// as arguments.

function customFilter(arr, func) {
    for (let el in arr) {
        if (func(arr[el])) return arr[el]
    }
    return undefined
}

module.exports = customFilter