const customFilter = require('./index-START')

test('customFilter is a function', () => {
    expect(typeof customFilter).toEqual('function')
})

test('return kiwi', () => {
    expect(customFilter(['apple', 'orange', 'kiwi', 'banana'], el => el.length === 4)).toEqual('kiwi');
})
