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

        it('stays dead when it has two living neighbours vertically', () => {
            const board = [
                [O],
                [_],
                [O]
            ]
            expect(next_generation(board)).to.deep.equal([
                [_],
                [_],
                [_]
            ])
        })

        it('comes to life with three living neighbours', () => {
            const board = [
                [O, O],
                [_, O],
            ];
            expect(next_generation(board)).to.deep.equal([
                [O, O],
                [O, O]
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

        it('central cell stays alive and neighbour cells die when it has two living neighbours above and below', () => {
            const board = [
                [O],
                [O],
                [O]
            ]

            expect(next_generation(board)).to.deep.equal([
                [_],
                [O],
                [_]
            ])
        });

        it('central cell stays alive and neighbour cells die when it has two diagonal neighbours', () => {
            const board = [
                [O, _, _],
                [_, O, _],
                [_, _, O]
            ]

            expect(next_generation(board)).to.deep.equal([
                [_, _, _],
                [_, O, _],
                [_, _, _]
            ])
        });

        it('central cell stays alive and neighbour cells die when it has two different diagonal neighbours', () => {
            const board = [
                [_, _, O],
                [_, O, _],
                [O, _, _]
            ]

            expect(next_generation(board)).to.deep.equal([
                [_, _, _],
                [_, O, _],
                [_, _, _]
            ])
        });
    });
});
