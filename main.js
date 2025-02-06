window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    let board = new Board();
    let currentPiece = new Piece("S");

    function getRandomPiece() {
        const types = Object.keys(SHAPES); //shapes from piece.js
        return types[Math.floor(Math.random() * types.length)];
    }

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        board.draw(ctx);

        if (!currentPiece.isPlaced) {
            currentPiece.update(board);
        } else {
            // Create a new piece if the current one is placed
            currentPiece = new Piece(getRandomPiece());
        }
        currentPiece.draw(ctx);
    }
    // Run gameLoop every dropInterval (300ms)
    setInterval(gameLoop, 50);
});
