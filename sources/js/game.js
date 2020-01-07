$(document).ready(function() {

    var player = '<div id="player"></div>';

    $("#map").append(player);

    $(".btn1").click(function() {
        $("#player").animate({ left: "-=50px" });
    });
    $(".btn2").click(function() {
        $("#player").animate({ left: "+=50px" });
    });
});


// Upload images
var background = new Image();
var shot = new Image();

background.src = "sources/img/canvas.jpg";
shot.src = "sources/img/zombie.gif";