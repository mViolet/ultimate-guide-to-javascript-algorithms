/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    let reversed = ''
    for (let i=text.length-1; i >= 0; i--) {
        reversed += text[i]
    }
    return reversed
}



module.exports = reverseString