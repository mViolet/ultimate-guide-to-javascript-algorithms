//reverse an integer, ie.: 365 becomes 563, -23 becomes -32

function integerReversal(int) {
    //convert to string
    //replace neg sign with '' and track
    //use split reverse join
    //convert back to num with appropriate sign
    let negative = false
    let string = int.toString()
    if (string.includes('-')) {
        negative = true
        string = string.replace(/-/gi, '')
    }
    string = string.split('').reverse().join('')

    return negative === false ? Number(string) : Number('-' + string)
}

module.exports = integerReversal

//could have used parseInt to remove sign, and Math.sign(num) to add the sign back!