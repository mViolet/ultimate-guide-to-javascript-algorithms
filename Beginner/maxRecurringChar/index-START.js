/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    const occ = {}
    for (char in text) {
        !occ[text[char]] ? occ[text[char]] = 1 : occ[text[char]]++
        }

    let max = 0
    let maxOcc = ''

    for (char in occ){
        console.log(`char: ${char} ... occ: ${occ}... occ{char}: ${occ[char]}`)
        if (occ[char] > max) {
            maxOcc = char
            max = occ[char]
        }
    }
    return maxOcc
}




module.exports = maxRecurringChar;