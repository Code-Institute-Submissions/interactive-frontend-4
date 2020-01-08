$(document).ready(function() {

    var player = '<div id="player"><img src="sources/img/human.gif"></div>';

    $("#map").append(player);

    var mouseX = 0,
        mouseY = 0;
    $("#map").mousemove(function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    // cache the selector
    var movePlayer = $("#player");
    var xp = 0,
        yp = 0;
    var loop = setInterval(function() {
        // change 12 to alter damping higher is slower
        xp += (mouseX - xp) / 12;
        yp += (mouseY - yp) / 12;
        movePlayer.css({ left: xp, top: yp });

    }, 30);
});