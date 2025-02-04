const Piece = {
    position: { x: 7, y: 7 },
    down: {x: 1, y: 0},
    draw(context) {
        context.fillRect(
            this.position.x * CELL_SIZE, 
            this.position.y * CELL_SIZE, 
            CELL_SIZE, 
            CELL_SIZE);
    }
}