class Board {
    constructor(rows = 20, cols = 10) {
        this.gameOver = false;
        this.rows = rows;
        this.cols = cols;

        this.grid = localStorage.getItem("grid") 
            ? JSON.parse(localStorage.getItem("grid")) 
            : Array.from({length:rows}, () => Array(cols).fill(0));   
        
            this.score = 0; 
        this.highScore = localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : 0; // Load high score

        // display high score when loading game
        document.getElementById('highscore').innerText = `Highscore: ${this.highScore}`;
    }

    draw(context) {
        if (this.gameOver) return; // Don't draw the game if the game is over
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
        if (this.gameOver) return;

        //Place piece on grid
        piece.segments.forEach(segment => {
            let x = piece.position.x + segment.x;
            let y = piece.position.y + segment.y;

            if (y < 0) {
                this.gameOver = true;
            }
            
            // Prevent out of bounds
            if (y >= 0 && y < this.rows && x >= 0 && x < this.cols) {
                this.grid[y][x] = 1;
            }
        });

        if (this.gameOver) {
            this.endGame();
            return;
        }

        // After placing the piece, clear the rows
        this.clearRows();
        // Save the new grid position
        localStorage.setItem("grid", JSON.stringify(this.grid));
    }

    clearRows() {
        // Filter out full rows
        let newGrid = this.grid.filter(row => row.some(cell => cell === 0));
        let rowsCleared = this.rows - newGrid.length;
        
        // Add empty rows to the top
        while (newGrid.length < this.rows) {
            newGrid.unshift(new Array(this.cols).fill(0));
        }
        
        this.grid = newGrid;
        
        if (rowsCleared > 0) {
            this.updateScore(rowsCleared);
            console.log(`Cleared ${rowsCleared} row(s)!`);
        }
    }

    updateScore(rowsCleared) {
        const points = [0, 100, 300, 500, 800]
        this.score += points[rowsCleared] || (rowsCleared * 200);

        // update the score html
        document.getElementById('score').innerText = `Score: ${this.score}`;
    }

    resetGame() {
        this.grid = Array.from({length:this.rows}, () => Array(this.cols).fill(0));  
        //update high score
        if (this.highScore < this.score) {
            this.highScore = this.score;
        }
        this.score = 0;
        //update html scores
        document.getElementById('score').innerText = `Score: ${this.score}`
        document.getElementById('highscore').innerText = `Highscore: ${this.highScore}`
        localStorage.setItem("highScore", this.highScore);
        this.gameOver = false;
    }

    endGame() {
        alert("Game Over! Press R to restart."); //popup
        this.gameOver = true;
    }
}
