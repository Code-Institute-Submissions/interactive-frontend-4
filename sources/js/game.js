let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: 1
});

document.body.appendChild(app.view);

PIXI.loader.add(["sources/img/zombie.png", "sources/img/player.png"]).load(setup);

function setup() {
    let player = new PIXI.Sprite(PIXI.loader.resources["sources/img/player.png"].texture);
    let zombomb = new PIXI.Sprite(PIXI.loader.resources["sources/img/zombie.png"].texture);
    app.stage.addChild(zombomb, player);

}