import { describe, it, expect } from 'vitest';
import { next_generation } from './game';

const O: boolean = true;
const _: boolean = false;

interface location {
    row: number;
    col: number;
}

function next_gen(board: boolean[][]) {
    return {
        board: next_generation(board),
        at({ row, col }: location): boolean {
            return this.board[row][col];
        }
    }
}

describe('Game of Life', () => {
    it('works for an empty board', () => {
        expect(next_generation([[]])).to.deep.equal([[]]);
    });

    describe('dead cell', () => {
        it('stays dead with no neighbours', () => {
            expect(next_generation([[_]])).to.deep.equal([[_]]);
        });

        it('stays dead with two living neighbours', () => {
            expect(next_gen([[O, _, O]]).at({ row: 0, col: 1})).to.be.false;
        });
    });

    describe('alive cell', () => {
        it('dies with no neighbours', () => {
            expect(next_generation([[O]])).to.deep.equal([[_]]);
        });

        it('stays alive with two living neighbours', () => {
            const board = [[O, O, O]];
            expect(next_gen(board).at({ row: 0, col: 1})).to.be.true;;
        });
    });
});
