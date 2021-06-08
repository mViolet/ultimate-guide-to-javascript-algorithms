// Translate the provided string to Pig Latin by following the rules below:

// For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed.E.g
// "pig" = "igpay"

// For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed.E.g
// "glove" = "oveglay"

// For words that begin with vowel sounds, simply add "way" to the end of the word.E.g
// "explain" = "explainway”


function pigLatin(string) {
    const words = string.match(/\w+/gi) //match each word (no apostrophes)
    return words
        .map(word =>
            (m = word.match(/^[^aeiouy]+/gi)) ? //str does not start with a vowel?
            word.substr(m[0].length) + m + 'ay'
            : word + 'way'
            )
        .join(' ')
}

module.exports = pigLatin