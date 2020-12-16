const isValidEcl = require('./day4')
describe('isValidEcl', () => {
  it('isValidEcl true 1-3', () => {
      expect(isValidEcl('000000001')).toBe(true)
  });
  it('isValidEcl true d', () => {
    expect(isValidEcl('0123456789')).toBe(false)
});

});