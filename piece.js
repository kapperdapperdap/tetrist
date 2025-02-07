/* BEFORE ROTATIONS
const SHAPES = {
    I: [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0} ],
    O: [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ],
    T: [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1} ],
    L: [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1} ],
    J: [ {x: -1, y: 1}, {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0} ],
    S: [ {x: 0, y: 0}, {x: 1, y: 0}, {x: -1, y: 1}, {x: 0, y: 1} ],
    Z: [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ]
};
*/

// AFTER ROTATIONS
const SHAPES = {
    I: [
      // Rotation 0: horizontal
      [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0} ],
      // Rotation 1: vertical
      [ {x: 0, y: -1}, {x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2} ],
      // Rotation 2: horizontal (mirrored relative to rotation 0)
      [ {x: -2, y: 0}, {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0} ],
      // Rotation 3: vertical (mirrored relative to rotation 1)
      [ {x: 0, y: -2}, {x: 0, y: -1}, {x: 0, y: 0}, {x: 0, y: 1} ]
    ],

    O: [
      // O-piece is the same in all rotations
      [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ],
      [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ],
      [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ],
      [ {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ]
    ],
  
    T: [
      // Rotation 0: extra block pointing down
      [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1} ],
      // Rotation 1: extra block pointing left
      [ {x: 0, y: -1}, {x: 0, y: 0}, {x: 0, y: 1}, {x: -1, y: 0} ],
      // Rotation 2: extra block pointing up
      [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: -1} ],
      // Rotation 3: extra block pointing right
      [ {x: 0, y: -1}, {x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0} ]
    ],
  
    L: [
      // Rotation 0: L with its foot at bottom right
      [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1} ],
      // Rotation 1: rotated 90° clockwise (foot at bottom left)
      [ {x: 0, y: -1}, {x: 0, y: 0}, {x: 0, y: 1}, {x: -1, y: 1} ],
      // Rotation 2: rotated 180° (foot at top left)
      [ {x: -1, y: -1}, {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0} ],
      // Rotation 3: rotated 270° clockwise (foot at top right)
      [ {x: 0, y: -1}, {x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: -1} ]
    ],
  
    J: [
      // Rotation 0: mirror of L (foot at bottom left)
      [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: -1, y: 1} ],
      // Rotation 1: rotated 90° clockwise (foot at bottom right)
      [ {x: 0, y: -1}, {x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ],
      // Rotation 2: rotated 180° (foot at top right)
      [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: -1} ],
      // Rotation 3: rotated 270° clockwise (foot at top left)
      [ {x: 0, y: -1}, {x: 0, y: 0}, {x: 0, y: 1}, {x: -1, y: -1} ]
    ],
  
    S: [
      // Rotation 0: S shape (sloping upward to the right)
      [ {x: 0, y: 0}, {x: 1, y: 0}, {x: -1, y: 1}, {x: 0, y: 1} ],
      // Rotation 1: rotated 90° clockwise
      [ {x: 0, y: -1}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1} ],
      // Rotation 2: same as Rotation 0 (S pieces often only need 2 distinct states)
      [ {x: 0, y: 0}, {x: 1, y: 0}, {x: -1, y: 1}, {x: 0, y: 1} ],
      // Rotation 3: same as Rotation 1
      [ {x: 0, y: -1}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1} ]
    ],
  
    Z: [
      // Rotation 0: Z shape (sloping upward to the left)
      [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ],
      // Rotation 1: rotated 90° clockwise
      [ {x: 1, y: -1}, {x: 1, y: 0}, {x: 0, y: 0}, {x: 0, y: 1} ],
      // Rotation 2: same as Rotation 0
      [ {x: -1, y: 0}, {x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ],
      // Rotation 3: same as Rotation 1
      [ {x: 1, y: -1}, {x: 1, y: 0}, {x: 0, y: 0}, {x: 0, y: 1} ]
    ]
  };

class Piece {
    constructor(type, x = 5, y = 0) {
        this.type = type;
        this.position = { x, y };
        this.velocity = { x: 0, y: 1 };
        this.rotation = 0; // 0,1,2,3 not rotated 90 with the clock 180 and 270
        this.segments = SHAPES[this.type][this.rotation]; // Assign shape
        this.isPlaced = false; // Track when the piece is placed
    }

    draw(context) {
        context.fillStyle = "green"; // Change color per piece type later
        this.segments.forEach(segment => {
            context.fillRect(
            (this.position.x + segment.x) * CELL_SIZE,
            (this.position.y + segment.y) * CELL_SIZE,
            CELL_SIZE,
            CELL_SIZE
        );
    });
}

    // MOVEMENT
    rotateRight(board) {
        const oldRotation = this.rotation;
        this.rotation = (this.rotation + 1) % 4;
        this.segments = SHAPES[this.type][this.rotation];

        // If the new rotation resultts in collision, roll back:
        if (this.hasCollision(board)) {
            this.rotation = oldRotation;
            this.segments = SHAPES[this.type][this.rotation];
        }
    }

    rotateLeft(board) {
        const oldRotation = this.rotation;
        // Smart trick with rotation to the left (the + 4)
        this.rotation = (this.rotation - 1 + 4) % 4;
        //Update the segments
        this.segments = SHAPES[this.type][this.rotation];

        // If the new rotation resultts in collision, roll back:
        if (this.hasCollision(board)) {
            this.rotation = oldRotation;
            this.segments = SHAPES[this.type][this.roation];
        }
    }

    moveLeft(board) {
        const oldX = this.position.x;
        const oldY = this.position.y;
        this.position.x -= 1;
        
        if (this.hasCollision(board)) {
            this.position.x = oldX;
            this.position.y = oldY;
        }
    }

    moveRight(board) {
        const oldX = this.position.x;
        const oldY = this.position.y;
        this.position.x += 1;

        if (this.hasCollision(board)) {
            this.position.x = oldX;
            this.position.y = oldY;
        }
    }

    moveDown(board) {
        const oldX = this.position.x;
        const oldY = this.position.y;
        this.position.x += 1;

        if (this.hasCollision(board)) {
            this.position.x = oldX;
            this.position.y = oldY;
        }
    }


    // Collision if piece moves down 1
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

    hasCollision(board) {
        return this.segments.some(segment => {
            // Calculate the absolute position of the segment on the board
            let newX = this.position.x + segment.x;
            let newY = this.position.y + segment.y;
            
            // Check if the segment is out of bounds
            if (newX < 0 || newX >= board.cols || newY < 0 || newY >= board.rows) {
                return true;
            }
            
            // Check if the segment's cell on the board is already occupied
            if (board.grid[newY][newX] !== 0) {
                return true;
            }
            
            // No collision for this segment
            return false;
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

