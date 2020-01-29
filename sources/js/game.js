// Setting my game area

let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: 1
});

document.body.appendChild(app.view);

// Loading the game components
PIXI.loader.add(["sources/img/zombie.png", "sources/img/player.png"]).load(setup);

function setup() {
    let player = new PIXI.Sprite(PIXI.loader.resources["sources/img/player.png"].texture);
    let zombomb = new PIXI.Sprite(PIXI.loader.resources["sources/img/zombie.png"].texture);
    player.x = app.screen.width / 2;
    player.y = app.screen.height / 2;
    player.anchor.x = 0.5;
    app.stage.addChild(zombomb, player);
}