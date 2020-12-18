const decodeRowNumber = require('./day5')
describe('decodeRowNumber', () => {
    it('When firs letter is B row number is >63 and <128', () => {
        expect(decodeRowNumber('BFFFBBFRRR')).toBeGreaterThan(63);
        expect(decodeRowNumber('BFFFBBFRRR')).toBeLessThan(128);
    });
    it('When firs letter is F row number is >=0 and <=63', () => {
        expect(decodeRowNumber('FFFFBBFRRR')).toBeGreaterThan(-1);
        expect(decodeRowNumber('FFFBBBFRRR')).toBeLessThan(64);
    });
    it('When firs letter is B and second letter is B row number is >95 and <128', () => {
        expect(decodeRowNumber('BBFFBBFRRR')).toBeGreaterThan(95);
        expect(decodeRowNumber('BBFFBBFRRR')).toBeLessThan(128);
    });
    it('When firs letter is F and second is F row number is >=0 and <=32', () => {
        expect(decodeRowNumber('FFFFBBFRRR')).toBeGreaterThan(-1);
        expect(decodeRowNumber('FFFBBBFRRR')).toBeLessThan(33);
    });
    
    it('When FFFBBBFRRR then 14', () => {
        expect(decodeRowNumber('FFFBBBFRRR')).toBe(14);
    });
});