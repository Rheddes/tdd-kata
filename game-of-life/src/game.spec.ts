import { describe, it, expect } from 'vitest';
import { next_generation } from './game';

const _: boolean = false;

describe('Game of Life', () => {
    it('works for an empty board', () => {
        expect(next_generation([[]])).to.deep.equal([[]]);
    });

    describe('dead cell', () => {
        it('stays dead with no neighbours', () => {
            expect(next_generation([[_]])).to.deep.equal([[_]]);
        });
    });

    describe('alive cell', () => {
        it('dies with no neighbours', () => {
            expect(next_generation([[true]])).to.deep.equal([[_]]);
        });
    });
});
