
function searchReplace(sentence, word, sub) {
    let exp = new RegExp(word, 'gi')
    return sentence.replace(exp, sub)
    // console.log(word)
}

module.exports = searchReplace