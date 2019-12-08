// Upload images
var zombomb = new Image();
zombomb.src = "sources/img/zombie.gif";

//var for components


function startGame() {
    var canvas = document.getElementById('gameArea');
    var ctx = canvas.getContext('2d');
    gameBomb = new component(zombomb, "image");

    ctx.save();
    ctx.rotate(0.17);
    ctx.drawImage(zombomb, x, y);
    ctx.restore();

}

gameBomb {

}