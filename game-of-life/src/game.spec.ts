import { describe, it, expect } from 'vitest';
import { next_generation } from './game';

describe('Game of Life', () => {
    it('works for an empty board', () => {
        expect(next_generation([[]])).to.deep.equal([[]]);
    });
});
