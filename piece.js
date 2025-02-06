const SHAPES = {
    I: [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0} ],
    O: [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ],
    T: [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1} ],
    L: [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1} ],
    J: [ {x: -1, y: 1}, {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0} ],
    S: [ {x: 0, y: 0}, {x: 1, y: 0}, {x: -1, y: 1}, {x: 0, y: 1} ],
    Z: [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ]
};

class Piece {
    constructor(type, x = 5, y = 0) {
        this.type = type;
        this.position = { x, y };
        this.velocity = { x: 0, y: 1 };
        this.segments = SHAPES[type]; // Assign shape
        this.isPlaced = false; // Track when the piece is placed
    }

    draw(context) {
        context.fillStyle = "blue"; // Change color per piece type later
        this.segments.forEach(segment => {
            context.fillRect(
            (this.position.x + segment.x) * CELL_SIZE,
            (this.position.y + segment.y) * CELL_SIZE,
            CELL_SIZE,
            CELL_SIZE
        );
    });
}

checkCollision(board) {
    return this.segments.some(segment => {
        let newX = this.position.x + segment.x;
        let newY = this.position.y + segment.y + 1;

        // If piece on bottom row
        if (newY >= board.rows) return true;

        // If the next position is occupied
        return board.grid[newY][newX] !== 0;
    });
}

    update(board) {
        if (this.checkCollision(board)) {
            // Stop the piece and place it
            board.placePiece(this);
            this.isPlaced = true;
            return;
        }
        // Move down if no collision
        this.position.y += this.velocity.y;
    }
}

