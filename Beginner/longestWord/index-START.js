/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//performance of .reduce() is similar
function longestWord(text) {
    let word = ''
    let arr = text.split(' ')
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > word.length) word = arr[i]
    }
    return word
}


module.exports = longestWord