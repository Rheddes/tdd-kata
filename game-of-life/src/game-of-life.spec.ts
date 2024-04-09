import { describe, it, expect } from "vitest";
import { Game } from "./game-of-life";

const _ = false;
const O = true;

describe('Game of life', () => {
  describe('Alive cell', () => {
    it('dies when it has fewer than two alive neighbours', () => {
      const game = new Game([
        [_, _, _],
        [_, O, _],
        [_, _, _],
      ]);
      expect(game.nextGeneration()).to.deep.equal(new Game([
        [_, _, _],
        [_, _, _],
        [_, _, _],
      ]));
    });

    it('stays alive when it has two neighbours', () => {
      const game = new Game([
        [_, _, _],
        [_, O, O],
        [O, _, _],
      ]);
      expect(game.nextGeneration()).to.deep.equal(new Game([
        [_, _, _],
        [_, O, _],
        [_, _, _],
      ]));
    });
  });
});
