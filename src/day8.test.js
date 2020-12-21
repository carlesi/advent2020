const { executeCommandWithValue, getAcumulator, getPosition, Command , parseCommand,executeCommand} = require('./day8');

describe('day8', () => {
    it('When command is nop position+1 accumulator+0', () => {
        let position = getPosition();
        let accumulator = getAcumulator();
        expect(executeCommandWithValue('nop', 5)).toBe(position + 1);
        expect(getAcumulator()).toBe(accumulator + 0);
    });
    it('When command is "nop +5" position+1 accumulator+0', () => {
        let position = getPosition();
        let accumulator = getAcumulator();
        let currentComand = parseCommand('nop +5');
        expect(executeCommand(currentComand)).toBe(position + 1);
        expect(getAcumulator()).toBe(accumulator + 0);
    });
    it('When two commands in a row are nop then position+2 accumulator+0', () => {
        let position = getPosition();
        let accumulator = getAcumulator();
        expect(executeCommandWithValue('nop', 0)).toBe(position + 1);
        expect(executeCommandWithValue('nop', 0)).toBe(position + 2);
        expect(getAcumulator()).toBe(accumulator + 0);
    });

    it('When command is acc and value 1 then position+1 accumulator+1', () => {
        let position = getPosition();
        let accumulator = getAcumulator();
        expect(executeCommandWithValue('acc', 1)).toBe(position + 1);
        expect(getAcumulator()).toBe(accumulator + 1);
    });
    it('When command is acc and value 5 then position+1 accumulator+5', () => {
        let position = getPosition();
        let accumulator = getAcumulator();
        expect(executeCommandWithValue('acc', 5)).toBe(position + 1);
        expect(getAcumulator()).toBe(accumulator + 5);
    });

    it('When command is acc and value -5 then position+1 accumulator-5', () => {
        let position = getPosition();
        let accumulator = getAcumulator();
        expect(executeCommandWithValue('acc', -5)).toBe(position + 1);
        expect(getAcumulator()).toBe(accumulator - 5);
    });
    it('When command is jmp and value 1 then position+1 accumulator+0', () => {
        let position = getPosition();
        let accumulator = getAcumulator();
        expect(executeCommandWithValue('jmp', 1)).toBe(position + 1);
        expect(getAcumulator()).toBe(accumulator + 0);
    });
    it('When command is jmp and value 5 then position+5 accumulator+0', () => {
        let position = getPosition();
        let accumulator = getAcumulator();
        expect(executeCommandWithValue('jmp', 5)).toBe(position + 5);
        expect(getAcumulator()).toBe(accumulator + 0);
    });
    it('When command is jmp and value -5 then position-5 accumulator+0', () => {
        let position = getPosition();
        let accumulator = getAcumulator();
        expect(executeCommandWithValue('jmp', -5)).toBe(position - 5);
        expect(getAcumulator()).toBe(accumulator + 0);
    });

});