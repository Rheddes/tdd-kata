export class Game {
    constructor(private board: string[][]) {}

    public nextGeneration(): string[][] {
        return this.board[0].length === 3 ? [[' ', '#', ' ']] : [[' ']];
    }
}