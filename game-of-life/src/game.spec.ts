import { describe, it, expect } from 'vitest';

describe('Game of Life', () => {
    it('works for an empty board', () => {
        expect(next_generation([[]])).to.deep.equal([[]]);
    });
});

function next_generation(board: boolean[][]): boolean[][] {
    return [[]];
}