// Upload images
var background = new Image();
var shot = new Image();
var player = new Image();

background.src = "sources/img/canvas.jpg";
shot.src = "sources/img/zombie.gif";
player.src = "sources/img/human.gif";





//Game Area
function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 320;
    canvas.height = 540;
    ctx.drawImage(shot, 50, 50);
    ctx.drawImage(player, 155, 490);


    //functions for movements

    function moveleft() {
        shot.speedX -= 1;
    }

    function moveright() {
        shot.speedX += 1;
    }

}




window.onload = draw;