window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    let board = new Board();
    let currentPiece = new Piece(getRandomPiece());

    let keys = {};
    let lastMoveTime = 0;
    let moveDelay = 120; // Delay for left/right movement (milliseconds)
    let lastDropTime = 0;
    let dropDelay = 300; // Normal drop speed
    let softDrop = false;
    let lastRotateTime = 0;
    let rotateCooldown = 200; // Prevent rotating too quickly
    let lastHardDropTime = 0;
    let hardDropDelay = 200;

    function getRandomPiece() {
        const types = Object.keys(SHAPES);
        return types[Math.floor(Math.random() * types.length)];
    }

    window.addEventListener('keydown', function(event) {
        keys[event.key] = true;
    });

    window.addEventListener('keyup', function(event) {
        keys[event.key] = false;
    });

    function handleInput() {
        // Only allow R (restart key) if game is over
        if (!board.gameOver) {
            let now = performance.now();

            // Move Left/Right (Throttled)
            if (now - lastMoveTime > moveDelay) {
                if (keys['ArrowLeft'] || keys['a']) {
                    currentPiece.moveLeft(board);
                    lastMoveTime = now;
                }
                if (keys['ArrowRight'] || keys['d']) {
                    currentPiece.moveRight(board);
                    lastMoveTime = now;
                }
            }

            // Rotate (Throttled)
            if (now - lastRotateTime > rotateCooldown) {
                if (keys['ArrowUp'] || keys['w']) {
                    currentPiece.rotateLeft(board);
                    lastRotateTime = now;
                }
            }

            // Soft Drop (Hold Down)
            if (keys['ArrowDown'] || keys['s']) {
                softDrop = true;
            } else {
                softDrop = false;
            }

            // Hard Drop
            if (now - lastHardDropTime > hardDropDelay) {
                if (keys[' ']) { //spacebar
                    currentPiece.hardDrop(board);
                    lastHardDropTime = now;

                }            
            }
            // Game reset
            if (keys ['r']) {
                board.resetGame();
        }

        }



    }

    function gameLoop(timestamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        handleInput();
        currentPiece.draw(ctx);
        board.draw(ctx);

        requestAnimationFrame(gameLoop);
    }

    function dropPiece() {
        if (board.gameOver) return; // Stop dropping pieces when game is over

        let now = performance.now();
        let speed = softDrop ? 50 : dropDelay; // Faster when soft dropping

        if (now - lastDropTime > speed) {
            if (!currentPiece.isPlaced) {
                currentPiece.update(board);
            } else {
                currentPiece = new Piece(getRandomPiece());
            }
            lastDropTime = now;
        }
    }

    requestAnimationFrame(gameLoop);
    setInterval(dropPiece, 30); // Runs faster but only drops when time passes
});
