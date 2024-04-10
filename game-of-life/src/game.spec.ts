import { describe, expect, it } from "vitest";
import { next_generation } from "./game";

describe('Game of Life', () => {
    it('works for an empty board', () => {
        const board = [[]];
        expect(next_generation(board)).to.deep.equal([[]]);
    });
});
