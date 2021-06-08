/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {

    // a nice one-liner... but .flat() doesn't work with leading zeros!!!
    // console.log([...new Set(arrays.flat().sort((a,b) => a-b))])

    // so I tried it with forEach:
    const flatEls = []
    arrays.forEach(arr => arr.forEach(el => flatEls.push(el)))

    return [...new Set(flatEls.sort((a, b) => a - b))]

    //using .filter to compare the current index with the index of the item is fastest
}


module.exports = mergeArrays