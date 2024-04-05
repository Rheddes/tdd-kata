import { describe, it, expect } from 'vitest';
import { Game } from './game-of-life';

const O: boolean = true;
const _: boolean = false;

describe('Game of Life', () => {
  it('maintains an empty board', () => {
    const game = new Game([[]]);
    expect(game.nextGeneration()).to.deep.equal(new Game([[]]));
  });

  describe('Alive cell', () => {
    it('dies when it has less than two alive neighbours', () => {
      const game = new Game([[_, O, _]]);
      expect(game.nextGeneration()).to.deep.equal(new Game([[_, _, _]]));
    });

    it('stays alive when it has two alive neighbours', () => {
      const game = new Game([[O, O, O]]);
      expect(game.nextGeneration()).to.deep.equal(new Game([[_, O, _]]));
    });

    it('dies if it has four alive neighbours', () => {
      const game = new Game([
        [O, O, _],
        [_, O, _],
        [_, O, O],
      ]);
      expect(game.nextGeneration()).to.deep.equal(new Game([
        [O, O, _],
        [_, _, _],
        [_, O, O],
      ]));
    });
  });

  describe('dead cell', () => {
    it('comes to live when it has 3 alive neighbours', () => {
      const game = new Game([
        [O, _, _],
        [_, _, O],
        [O, _, _],
      ]);
      expect(game.nextGeneration()).to.deep.equal(new Game([
        [_, _, _],
        [_, O, _],
        [_, _, _],
      ]))
    });
  });

  it('has a string representation', () => {
    const game = new Game([
      [_, O, _],
      [O, O, O],
      [_, O, _],
    ]);
    expect(game.toString()).to.equal(` # 
###
 # `);
  });
});
