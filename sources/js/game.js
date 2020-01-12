$(document).ready(function() {

    let player = '<div id="player"><img src="sources/img/human.gif"></div>';
    let zombomb = '<div id="zombomb"><img src="sources/img/zombie.png"></div>';
    $("#gameArea").append(player, zombomb);
    $("#gameArea").mousemove(function(event) {
        $("#zombomb").css({ left: event.pageX })
        $("#player").css({ left: event.pageX })
    })

    // CODE FOR TESTING ---------
    //  var movePlayer = $("#player");
    //  var xp = 0,
    //      yp = 0;
    //   var loop = setInterval(function() {
    // change 12 to alter damping higher is slower
    //      xp += (mouseX - xp) / 12;
    //      yp += (mouseY - yp) / 12;
    //      movePlayer.css({ left: xp, top: yp });
    //      }, 500);
});