export class Game {
  constructor(private readonly board: boolean[][]) { }

  public nextGeneration(): Game {
    return new Game(this.board.map(
      (row, row_idx) => row.map(
        (cell, col_idx) => this.nextGenerationForCell(cell, this.getNeighbours(row_idx, col_idx))
      )
    ));
  }

  public toString(): string {
    return this.board.map(row => row.map(cell => cell ? '#' : ' ').join('')).join("\n");
  }

  private getNeighbours(row_idx: number, col_idx: number): boolean[] {
    return [
      this.board[row_idx-1]?.[col_idx-1],
      this.board[row_idx-1]?.[col_idx],
      this.board[row_idx-1]?.[col_idx+1],
      this.board[row_idx]?.[col_idx-1],
      this.board[row_idx]?.[col_idx+1],
      this.board[row_idx+1]?.[col_idx-1],
      this.board[row_idx+1]?.[col_idx],
      this.board[row_idx+1]?.[col_idx+1],
    ];
  }

  private nextGenerationForCell(cell: boolean, neighbours: boolean[]): boolean {
    const aliveNeighboursCount = neighbours.filter(isAlive).length;
    if (aliveNeighboursCount === 2) return cell;
    if (aliveNeighboursCount === 3) return true;
    if (aliveNeighboursCount > 3) return false;
    return false;
  }
}

function isAlive(cell: boolean): boolean {
  return cell;
}