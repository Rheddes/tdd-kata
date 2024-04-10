type Board = boolean[][]

export function next_generation(board: Board): Board {
    return board.map((row, row_idx) => 
        row.map((cell, col_idx) => {
            if (cell_has_two_living_neighbours(row_idx, col_idx, board)) return cell;
            return false;
        }
    ));
}

function cell_has_two_living_neighbours(row: number, col: number, board: Board): boolean {
    return (get_cell_at(row-1, col, board) && get_cell_at(row + 1, col, board))
        || (get_cell_at(row, col-1, board) && get_cell_at(row, col+1, board))
}

function get_cell_at(row: number, col: number, board: Board) {
    return board[row]?.[col] ?? undefined;
}