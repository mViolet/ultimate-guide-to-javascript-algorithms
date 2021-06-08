/* 
Given an array and a chunk size, divide the array into
many sub-arrays where each sub-array has the specified
length.
E.g.:
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

//first try!
function chunkArray(array, size) {
    const arr = []
    array.forEach(el => arr.push(el))
    const chunked = []
    while (arr.length > 0){
        chunked.push(arr.splice(0, size))
    }
    return chunked
}


module.exports = chunkArray