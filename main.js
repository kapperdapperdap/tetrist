console.log(GAME.width, GAME.height);
window.addEventListener('load', function() {
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    ctx.fillStyle = 'aqua';
    // Draw a rectangle (square in this case since width and height are the same)
    //ctx.fillRect(5*CELL_SIZE,5*CELL_SIZE, CELL_SIZE, CELL_SIZE);
    console.log(Piece);
    //Snake.update();


    function animate() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        Piece.draw(ctx);
        Piece.update();
    }

    this.setInterval(animate, 500);

});