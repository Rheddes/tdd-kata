export function next_generation(board: boolean[][]): boolean[][] {
    return board.map(row => row.map(cell => false));
}