$(document).ready(function() {


    //Variables for components 
    let gameArea = $("#gameArea");
    let player = $("#player");
    let zombomb = $("#zombomb");
    let birdEnemies = $("#birdEnemies");




    $(gameArea).append(player, zombomb, birdEnemies);

    // Inspire on this answer on stackoverflow https://stackoverflow.com/questions/54680988/jquery-animate-a-div-character-in-a-game
    $(gameArea).mousemove(function(event) {
        $(zombomb).css({ left: event.pageX });
        $(player).css({ left: event.pageX });
    });

    $(gameArea).click(function() {
        // CODE FOR TESTING Classes $("#zombomb").addClass("shoot", 5000);

        // Shoot the zombies
        $(zombomb).animate({ "top": "-=400px" }, 200, "swing", function() { $(this).removeAttr('style'); });
    });

    setInterval(function() {
        $(birdEnemies).css({
            top: Math.random() * ($(window).height() - $(birdEnemies).height()) + 'px',
            left: Math.random() * ($(window).width() - $(birdEnemies).width()) + 'px'
        })
    }, 700);

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