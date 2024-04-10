type Board = boolean[][]

export function next_generation(board: Board): Board {
    return board.map((row, row_idx) => 
        row.map((cell, col_idx) => {
            if (get_number_of_living_neighbours_of(row_idx, col_idx, board) === 2) return cell;
            if (get_number_of_living_neighbours_of(row_idx, col_idx, board) === 3) return true;
            return false;
        }
    ));
}

function get_number_of_living_neighbours_of(row_idx: number, col_idx: number, board: Board) {
    return [
        get_cell_at(row_idx-1,col_idx-1, board),
        get_cell_at(row_idx-1, col_idx, board),
        get_cell_at(row_idx-1, col_idx+1, board),
        get_cell_at(row_idx, col_idx-1, board),
        get_cell_at(row_idx, col_idx+1, board),
        get_cell_at(row_idx+1, col_idx, board),
        get_cell_at(row_idx+1, col_idx+1, board),
    ].filter(is_alive).length;
}

function is_alive(cell: boolean): boolean {
    return cell;
}

function get_cell_at(row: number, col: number, board: Board) {
    return board[row]?.[col] ?? undefined;
}