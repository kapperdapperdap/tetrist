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

    update() {
        this.position.y += this.velocity.y;
    }
}

