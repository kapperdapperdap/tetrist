class Board {
    constructor(rows = 20, cols = 10) {
        this.rows = rows;
        this.cols = cols;
        this.grid = Array.from({length:rows}, () => Array(cols).fill(0));    
    }

    draw(context) {
        // Draw occupied grid cells
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.grid[y][x] !== 0) {
                    context.fillStyle = "black";
                    context.fillRect(
                        x * CELL_SIZE,
                        y * CELL_SIZE,
                        CELL_SIZE,
                        CELL_SIZE
                    );
                }     
            }
        }

        // Draw grid
        context.strokeStyle = "#ddd";
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                context.strokeRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }


    }

    // Place the piece in the grid
    placePiece(piece) {
        piece.segments.forEach(segment => {
            let x = piece.position.x + segment.x;
            let y = piece.position.y + segment.y;
            
            // Prevent out of bounds
            if (y >= 0 && y < this.rows && x >= 0 && x < this.cols) {
                this.grid[y][x] = 1;
            }

        })
    }
}
