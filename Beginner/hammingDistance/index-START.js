/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/



//compared this with the for loop solution and for loop is faster
function hammingDistance(stringA, stringB) {
    // first compare lengths of strings
    // if equal, then return how many chars are different
    if (stringA.length === stringB.length) {
        let count = 0
        for (char in stringA){
            if (stringA[char] !== stringB[char]) count++
        }
        return count
    } else {
        return 'strings are not the same length'
    }
}



module.exports = hammingDistance