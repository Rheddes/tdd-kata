import { describe, it, expect } from 'vitest';
import { Game } from './game';

describe('Game of Life', () => {
  describe('Cell', () => {
    it('dies when it has less then two alive neigbours', () => {
      const board = new Game([['#']]);
      expect(board.nextGeneration()).to.deep.equal([[' ']]);
    });

    it('stays a live with two neighbours', () => {
      const board = new Game([['#', '#', '#']]);
      expect(board.nextGeneration()).to.deep.equal([[' ', '#', ' ']]);
    });
  });
});
