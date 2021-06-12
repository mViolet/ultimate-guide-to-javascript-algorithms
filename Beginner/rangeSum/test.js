const rangeSum = require('./index-START')

test('rangeSum is a function', () => {
    expect(typeof rangeSum).toEqual('function')
})

test('positive nums', () => {
    expect(rangeSum([0,5])).toEqual(15)
})

test('negative num', () => {
    expect(rangeSum([-2, 5])).toEqual(12)
})