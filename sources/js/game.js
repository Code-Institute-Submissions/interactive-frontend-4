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
    canvas.width = 300;
    canvas.height = 440;
    ctx.drawImage(shot, 50, 50);
    ctx.drawImage(player, 155, 390);


    //functions for movements

    $(document).ready(function() {
        $("#move-right").click(function() {
            $("player").animate({ "left": "+=50px" }, "slow");
        });

        $("#move-left").click(function() {
            $("player").animate({ "left": "-=50px" }, "slow");
        });
    });

}

window.onload = draw;