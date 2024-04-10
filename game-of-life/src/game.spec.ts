import { describe, expect, it } from "vitest";
import { next_generation } from "./game";

const O: boolean = true;
const _: boolean = false;

describe('Game of Life', () => {
    it('works for an empty board', () => {
        const board = [[]];
        expect(next_generation(board)).to.deep.equal([[]]);
    });

    describe('dead cell', () => {
        it('stays dead when it has no neighbours', () => {
            const board = [[_]];
            expect(next_generation(board)).to.deep.equal([[_]]);
        });

        it('stays dead when it has two living neighbours', () => {
            const board = [[O, _, O]];
            expect(next_generation(board)).to.deep.equal([[_, _, _]]);
        });

        it('comes to life with three living neighbours', () => {
            const board = [
                [O, O],
                [O, _],
            ];
            expect(next_generation(board)).to.deep.equal([
                [O, O],
                [O, O],
            ]);
        });
    });

    describe('alive cell', () => {
        it('dies when it has no neighbours', () => {
            const board = [[O]];
            expect(next_generation(board)).to.deep.equal([[_]]);
        });

        it('stays alive when it has two living neighbours', () => {
            const board = [[O, O, O]];
            expect(next_generation(board)).to.deep.equal([[_, O, _]]);
        });
    });
});
