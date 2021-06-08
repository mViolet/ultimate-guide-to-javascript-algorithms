/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



// my solution
// function palindromeChecker(text) {
//     const lower = text.toLowerCase()
//     return lower === lower.split('').reverse().join('')
// }

// the more performant solution
function palindromeChecker(text) {
    const textLen = text.length
    for (let i = 0; i < textLen / 2; i++) {
        if (text[i] !== text[textLen - 1 - i]) {
            return false
        }
    }
    return true
}

module.exports = palindromeChecker;