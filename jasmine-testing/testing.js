function startGame() {

    var cvs = document.getElementById('canvas');
    var ctx = cvs.getContext("2d");
    myGamePiece = new component(30, 30, "red", 10, 120);
}


function move(dir) {
    myGamePiece.image.src = "angry.gif";
    if (dir == "up") { myGamePiece.speedY = -1; }
    if (dir == "down") { myGamePiece.speedY = 1; }
    if (dir == "left") { myGamePiece.speedX = -1; }
    if (dir == "right") { myGamePiece.speedX = 1; }
}

function clearmove() {
    myGamePiece.image.src = "smiley.gif";
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}