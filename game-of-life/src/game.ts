export function next_generation(board: boolean[][]): boolean[][] {
    return board.map((row, row_idx) => row.map((cell, col_idx) => {
        const neighbours = [
            board[row_idx-1]?.[col_idx-1],
            board[row_idx-1]?.[col_idx  ],
            board[row_idx-1]?.[col_idx+1],
            row[col_idx-1],
            row[col_idx+1],
            board[row_idx+1]?.[col_idx-1],
            board[row_idx+1]?.[col_idx],
            board[row_idx+1]?.[col_idx+1],
        ]
        if (neighbours.filter(c => c).length > 3) return false;
        if (neighbours.filter(c => c).length === 3) return true;
        if (neighbours.filter(c => c).length === 2) return cell;
        return false;
    }));
}