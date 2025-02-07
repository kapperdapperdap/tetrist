window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    let board = new Board();
    let currentPiece = new Piece(getRandomPiece());

    function getRandomPiece() {
        const types = Object.keys(SHAPES); //shapes from piece.js
        return types[Math.floor(Math.random() * types.length)];
    }

    window.addEventListener('keydown', function(event) {
        console.log(event.key);
        // Ensure currentpiece exists
        if (currentPiece) {
            if (event.key === 'ArrowUp') currentPiece.rotateRight(board);
            if (event.key === 'r') currentPiece.rotateLeft(board);
            if (event.key === 'ArrowLeft') currentPiece.moveLeft(board);
            if (event.key === 'ArrowRight') currentPiece.moveRight(board);
        }
    });

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        

        if (!currentPiece.isPlaced) {
            currentPiece.update(board);
        } else {
            // Create a new piece if the current one is placed
            currentPiece = new Piece(getRandomPiece());
        }
        currentPiece.draw(ctx);
        board.draw(ctx);
    }
    // Run gameLoop every dropInterval (300ms)
    setInterval(gameLoop, 100);
});
