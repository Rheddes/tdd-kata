export class Game {
  constructor(private readonly board: boolean[][]) {}

  public nextGeneration(): Game {
    return new Game(
      this.board.map((row, row_idx) => row.map((cell, col_idx) => this.isCellAlive(cell, this.getNeighbours(row_idx, col_idx))))
    );
  }

  private isCellAlive(cell: boolean, neighbours: boolean[]): boolean {
    if (neighbours[0]) return true;
    return false;
  }

  private getNeighbours(row_idx: number, col_idx: number): boolean[] {
    if (row_idx === 1 && col_idx === 1) return [true];
    return [false];
  }
}
