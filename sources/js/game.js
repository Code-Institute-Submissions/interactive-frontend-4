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
        $(zombomb).animate({ "top": "-=500px" }, 200, "swing", function() { $(this).removeAttr('style') }, collision);
    });

    setInterval(function() {
        $(birdEnemies).css({
            top: Math.random() * ($(window).height() - $(birdEnemies).height()) + 'px',
            left: Math.random() * ($(window).width() - $(birdEnemies).width()) + 'px'
        }, collision)
    }, 700);


    //   Collision between player and zombomb

    function collision(zombomb, birdEnemies) {
        var x1 = zombomb.offset().left;
        var y1 = zombomb.offset().top;
        var h1 = zombomb.outerHeight(true);
        var w1 = zombomb.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = birdEnemies.offset().left;
        var y2 = birdEnemies.offset().top;
        var h2 = birdEnemies.outerHeight(true);
        var w2 = birdEnemies.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }

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