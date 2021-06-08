const searchReplace = require('./index-START')

test('searchReplace is a function', () => {
    expect(typeof searchReplace).toEqual('function');
});

test('replaces lowercase string', () => {
    expect(searchReplace('Replace tomato with potato.', 'tomato', 'potato')).toEqual('Replace potato with potato.');
});

test('replaces uppercase string', () => {
    expect(searchReplace('Replace Tomato with potato.', 'tomato', 'potato')).toEqual('Replace potato with potato.');
});

test('empty string', () => {
    expect(searchReplace('', 'tomato', 'potato')).toEqual('');
});