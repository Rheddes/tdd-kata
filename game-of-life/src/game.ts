export function next_generation(board: boolean[][]): boolean[][] {
    return board.map((row, row_idx) => row.map((cell, col_idx) => {
        if (board[row_idx-1]?.[col_idx] && board[row_idx+1]?.[col_idx] && row[col_idx-1]) return true;
        if (row[col_idx-1] && row[col_idx+1]) return cell;
        return false;
    }));
}