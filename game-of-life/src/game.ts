export function next_generation(board: boolean[][]): boolean[][] {
    return board.map(row => row.map((cell, col_idx) => {
        if (row[col_idx-1] && row[col_idx+1]) return cell;
        return false;
    }));
}
