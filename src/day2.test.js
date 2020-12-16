const solution = require('./day2')
describe('solution', () => {
  it('Return true 1-3 a: abcde', () => {
      expect(solution('a', 1, 3, 'abcde')).toBe(true)
  });
  it('Return false cdefg', () => {
      expect(solution('b', 1, 3, 'cdefg')).toBe(false)
  });
  it('Return true ccccccccc', () => {
      expect(solution('c', 2, 9, 'ccccccccc')).toBe(false)
  });
  it('Return true xwjgxtmrzxzmkx', () => {
    expect(solution('x', 1, 9, 'xwjgxtmrzxzmkx')).toBe(true)
  });
  it('Return true rrrkrgr', () => {
    expect(solution('r', 4, 9, 'rrrkrgr')).toBe(false)
  });
});