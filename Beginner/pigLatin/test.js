const pigLatin = require('./index-START')

test('pigLatin is a function', () => {
    expect(typeof pigLatin).toEqual('function');
});

test('double consonant', () => {
    expect(pigLatin('thing')).toEqual('ingthay');
});

test('single consonant', () => {
    expect(pigLatin('pizza')).toEqual('izzapay');
});

test('vowel', () => {
    expect(pigLatin('almond')).toEqual('almondway');
});

test('convert a sentence without punctuation to pig latin', () => {
    expect(pigLatin('hello there oliver')).toEqual('ellohay erethay oliverway');
});