const {splitGroups, addRepeatedAnswersToGroup,countRepeatedAnswers,solution} = require('./day6')
//const day = require('./day6')
const testStr = `abc

a
b
c

ab
ac

a
a
a
a

b`;

describe('splitGroups', () => {
    it('When testStr 5 groups', () => {
        expect(splitGroups(testStr).length).toBe(5);
    });
    it('When group abc 3 answers', () => {
        let groups = splitGroups(testStr);
        expect(addRepeatedAnswersToGroup(groups[0][0],[]).length).toBe(3);
    });
    it('When group a,b,c 0 answers', () => { 
        let group = [ 'a', 'b', 'c' ];
        expect(countRepeatedAnswers(group)).toBe(0);
    });
    it('When group ab,ac 1 answer', () => { 
        let group = [ 'ab', 'ac' ];
        expect(countRepeatedAnswers(group)).toBe(1);
    });
    it('When group a,a,a,a 1 answer', () => { 
        let group = [ 'a', 'a' ,'a','a' ];
        expect(countRepeatedAnswers(group)).toBe(1);
    });
    it('When group b 1 answer', () => { 
        let group = [ 'b'];
        expect(countRepeatedAnswers(group)).toBe(1);
    });
    it('When testStr then 6', () => { 
        expect(solution(testStr)).toBe(6);
    });
});