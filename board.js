class Board {
    constructor(rows = 20, cols = 10) {
        this.rows = rows;
        this.cols = cols;
        this.grid = Array.from({length:rows}, () => Array(cols).fill(0));    
    }

    draw(context) {
        context.strokeStyle = "#ddd";
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                context.strokeRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }
    }
}
