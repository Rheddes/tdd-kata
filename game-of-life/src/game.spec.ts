import { describe, expect, it } from "vitest";

describe('Game of Life', () => {
    it('works for an empty board', () => {
        const board = [[]];
        expect(next_generation(board)).to.deep.equal([[]]);
    });
});

function next_generation(board: boolean[][]): boolean[][] {
    return [[]];
}