export function next_generation(board: boolean[][]): boolean[][] {
    return board.map((row, row_idx) => row.map((cell, col_idx) => {
        const nofAliveNeighbours = [
            board[row_idx-1]?.[col_idx],
            row[col_idx-1],
            row[col_idx+1],
            board[row_idx+1]?.[col_idx],
        ].filter(c => c).length;
        if (nofAliveNeighbours === 3) return true;
        if (nofAliveNeighbours === 2) return cell;
        return false;
    }));
}