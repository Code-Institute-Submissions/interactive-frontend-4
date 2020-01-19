$(document).ready(function() {
    //Variables for components
    let player = '<div id="player"><img src="sources/img/human.gif"></div>';
    let zombomb = $("#zombomb");
    //Arythmetics



    $("#gameArea").append(player, zombomb);

    // Inspire on this answer on stackoverflow https://stackoverflow.com/questions/54680988/jquery-animate-a-div-character-in-a-game
    $("#gameArea").mousemove(function(event) {
        $("#zombomb").css({ left: event.pageX });
        $("#player").css({ left: event.pageX });
    })

    $("#gameArea").click(function() {
        // $("#zombomb").addClass("shoot", 5000);
        $(zombomb).animate({ "top": "-=200px" }, 200, "swing", function() { $(this).removeAttr('style'); });
    });



});



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