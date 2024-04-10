import { describe, expect, it } from "vitest";

describe('example', () => {
    it('works', () => {
        expect(true).to.be.true;
    });

    describe('neighbours_of', () => {
        const board = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        it('works for all neighbours', () => {
            expect(neighbours_of(board, { row: 1, col: 1 })).to.have.members([4, 6, 7, 8, 9, 1, 2, 3]);
        });

        it('works in the corner', () => {
            expect(neighbours_of(board, { row: 0, col: 0 })).to.have.members([2, 5, 4]);
            expect(neighbours_of(board, { row: 2, col: 2 })).to.have.members([5, 8, 6]);
        });
    });
});

interface Location { row: number; col: number }

function neighbours_of<T>(board: T[][], { row, col }: Location): T[] {
    return [
        board[row-1]?.[col-1],
        board[row-1]?.[col  ],
        board[row-1]?.[col+1],
        board[row]?.[col-1],
        board[row]?.[col+1],
        board[row+1]?.[col-1],
        board[row+1]?.[col  ],
        board[row+1]?.[col+1],
    ].filter(c => c !== undefined);
}