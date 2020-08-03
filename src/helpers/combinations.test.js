const combinations = require('./combinations');

test('combinations starts at a and ends z', () => {
    expect(combinations('',1)).toBe('abcdefghijklmnopqrstuvwxyz'.split(''));
})