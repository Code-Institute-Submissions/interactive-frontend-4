// Upload images
var zombomb = new Image();
zombomb.src = "sources/img/zombie.gif";

//Main var index for game
x = 45;
y = 120;

//Canvas Section
function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 500;
    ctx.drawImage(zombomb, x, y, 50, 50);

}


window.onload = draw;