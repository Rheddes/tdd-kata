import { describe, expect, it } from "vitest";
import { next_generation } from "./game";

describe('Game of Life', () => {
    it('works for an empty board', () => {
        const board = [[]];
        expect(next_generation(board)).to.deep.equal([[]]);
    });

    describe('dead cell', () => {
        it('stays dead when it has no neighbours', () => {
            const board = [[false]];
            expect(next_generation(board)).to.deep.equal([[false]]);
        });
    });

    describe('alive cell', () => {
        it('dies when it has no neighbours', () => {
            const board = [[true]];
            expect(next_generation(board)).to.deep.equal([[false]]);
        })
    })
});
