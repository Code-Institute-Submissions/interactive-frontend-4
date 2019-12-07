var zombomb = new Image();
zombomb.src = "sources/img/zombie.gif";

function startGame() {
    var canvas = document.getElementById('gameArea');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillRect(30, 30, 50, 50);
        ctx.drawImage(zombomb, 15, 50);

    }

}

startGame();