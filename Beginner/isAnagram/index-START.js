/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/


//this was my solution before realizing I should have sanitized the string
function isAnagram(stringA, stringB) {
    // check if length is the same
    //loop through and check that each letter exists in other string

    if (stringA.length === stringB.length && stringA.length >= 1) {
        for (let i = 0; i < stringA.length; i++){
            if (!stringB.includes(stringA[i])) return false
        }
        return true
    } else {
        return false
    }
}


module.exports = isAnagram