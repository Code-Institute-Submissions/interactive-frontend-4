// Upload images
var zombomb = new Image();
zombomb.src = "sources/img/zombie.gif";
zombomb.onload = () => { requestAnimationFrame(mainLoop) }

//var for components
var x = 35;
var y = 230;
var angleInDegrees = 0;


function startGame() {
    var canvas = document.getElementById('gameArea');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(zombomb, x, y);

    ctx.save();
    ctx.rotate(0.17);
    ctx.drawImage(zombomb, x, y);
    ctx.restore();

}