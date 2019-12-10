// Upload images
var background = new Image();
var zombomb = new Image();

background.src = "sources/img/canvas.jpg";
zombomb.src = "sources/img/zombie.gif";

//Main var index for game
x = 45;
y = 120;


//Canvas Section
function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();



    var ang = 0; //angle
    var fps = 800 / 8; //number of frames per sec
    img.onload = function() { //on image load do the following stuff
        canvas.width = 500; //Any width
        canvas.height = 500; //Any height
        var cache = this; //cache the local copy of image element for future reference
        var iw = cache.width;
        var ih = cache.height;
        setInterval(function() {
            ctx.save(); //saves the state of canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            ctx.translate(canvas.width / 2, canvas.height / 2); //let's translate
            ctx.rotate(Math.PI / 180 * (ang += 5)); //increment the angle and rotate the image 
            ctx.translate(-(canvas.width / 2), -(canvas.height / 2)); //let's translate
            ctx.drawImage(img, canvas.width / 2 - iw / 2, canvas.height / 2 - ih / 2, iw, ih); //draw the image ;)
            ctx.restore(); //restore the state of canvas

        }, fps);
    };

    img.src = "sources/img/zombie.gif"; //img

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                alert('left');
                break;
            case 38:
                alert('up');
                break;
            case 39:
                alert('right');
                break;
            case 40:
                alert('down');
                break;
        }
    };

}

window.onload = draw;