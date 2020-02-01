// Setting my game area
var renderer = PIXI.autoDetectRenderer(800, 600, {
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: 1,
});
document.body.appendChild(renderer.view);

// create the root of the scene graph
let stage = new PIXI.Container();

// loading my images
let bg = PIXI.Texture.fromImage('sources/img/gameBackground.png');
let texture = PIXI.Texture.fromImage('sources/img/player.png');
let zombomb = PIXI.Texture.fromImage('sources/img/zombie.png');

// calling the image for my player
let player = new PIXI.Sprite(texture);

// center player's anchor point
player.anchor.x = 0.5;
player.anchor.y = 0.5;

// move the sprite to the center of the screen
player.position.x = 200;
player.position.y = 150;

let background = new PIXI.Sprite(bg);
stage.addChild(background);

stage.addChild(player);

stage.interactive = true;

stage.on("mousedown", function(e) {
    shoot(player.rotation, {
        x: player.position.x + Math.cos(player.rotation) * 20,
        y: player.position.y + Math.sin(player.rotation) * 20
    });
})

let bullets = [];
let bulletSpeed = 5;

function shoot(rotation, startPosition) {
    let bullet = new PIXI.Sprite(zombomb);
    bullet.position.x = startPosition.x;
    bullet.position.y = startPosition.y;
    bullet.rotation = rotation;
    stage.addChild(bullet);
    bullets.push(bullet);
}

function rotateToPoint(mx, my, px, py) {
    let self = this;
    let dist_Y = my - py;
    let dist_X = mx - px;
    let angle = Math.atan2(dist_Y, dist_X);
    //let degrees = angle * 180/ Math.PI;
    return angle;
}

// start animating
animate();

function animate() {
    requestAnimationFrame(animate);

    // just for fun, let's rotate mr rabbit a little
    player.rotation = rotateToPoint(renderer.plugins.interaction.mouse.global.x, renderer.plugins.interaction.mouse.global.y, player.position.x, player.position.y);

    for (var b = bullets.length - 1; b >= 0; b--) {
        bullets[b].position.x += Math.cos(bullets[b].rotation) * bulletSpeed;
        bullets[b].position.y += Math.sin(bullets[b].rotation) * bulletSpeed;
    }
    // render the container
    renderer.render(stage);
}