const Piece = {
    position: { x: 5, y: 0 },
    velocity: {x: 0, y: 1},
    segments: [],
    draw(context) {
        context.fillRect(
            this.position.x * CELL_SIZE, 
            this.position.y * CELL_SIZE, 
            CELL_SIZE, 
            CELL_SIZE);
    },
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}