import { describe, it, expect } from 'vitest';
import { next_generation } from './game';

const O: boolean = true;
const _: boolean = false;

describe('Game of Life', () => {
  it('can handle an empty board', () => {
    expect(next_generation([[]])).to.deep.equal([[]]);
  });

  describe('Alive cell', () => {
    it('dies when it has no neigbours', () => {
      expect(next_generation([[O]])).to.deep.equal([[_]])
    });

    it('dies when it has only one alive neighbour', () => {
        expect(next_generation([[O, O]])).to.deep.equal([[_, _]]);
    });

    it('stays alive when it has two alive neighbours', () => {
        expect(next_generation([[O, O, O]])).to.deep.equal([[_, O, _]]);
    });

    it('dies when it has more than four neighbours', () => {
        const board = [
            [O, O, _],
            [_, O, _],
            [_, O, O],
        ];
        expect(next_generation(board)).to.deep.equal([
            [O, O, _],
            [_, _, _],
            [_, O, O],
        ]);
    });
  });

  describe('Dead cell', () => {
    it('comes to live with 3 alive neighbours', () => {
        const board = [
            [_, O, _],
            [O, _, _],
            [_, O, _],
        ];
        expect(next_generation(board)).to.deep.equal([
            [_, _, _],
            [O, O, _],
            [_, _, _],
        ])
    });
  });
});

