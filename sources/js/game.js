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
let enemie = PIXI.Texture.fromImage('sources/img/birdenemie.png');

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

// Create the rotation with mouse
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
    return angle;
}

// Set enemies onto game area
for (var i = 0; i < 10; i++) {
    let birdEnemie = new PIXI.Sprite(enemie);
    birdEnemie.position.x = Math.random() * renderer.width;
    birdEnemie.position.y = Math.random() * renderer.height;
    stage.addChild(birdEnemie);
}



// start animating
animate();

function animate() {
    requestAnimationFrame(animate);

    // Player motion active and shooting
    player.rotation = rotateToPoint(renderer.plugins.interaction.mouse.global.x, renderer.plugins.interaction.mouse.global.y, player.position.x, player.position.y);

    // Action for shooting zombies
    for (var b = bullets.length - 1; b >= 0; b--) {
        bullets[b].position.x += Math.cos(bullets[b].rotation) * bulletSpeed;
        bullets[b].position.y += Math.sin(bullets[b].rotation) * bulletSpeed;
    }

    // render the container
    renderer.render(stage);
}