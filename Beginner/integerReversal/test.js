const integerReversal = require('./index-START')

test('integerReversal is a function', () => {
    expect(typeof integerReversal).toEqual('function')
})

test('reverse a positive int', () => {
    expect(integerReversal(365)).toEqual(563)
})

test('reverse a negative int', () => {
    expect(integerReversal(-349)).toEqual(-943)
})