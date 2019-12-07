// Upload images
var zombomb = new Image();
zombomb.src = "sources/img/zombie.gif";

//var for components

var x = 35;
var y = 230;
var gravity = 1.5;

function startGame() {
    var canvas = document.getElementById('gameArea');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.rotate(150);
        ctx.drawImage(zombomb, x, y);
    }

}

startGame();