// Game Area Set
const canvas = document.getElementById('gameArea');

const app = new PIXI.Application({
    view: canvas,
    width: window.innerWidth,
    height: window.innerHeight,
});

// Player added to the game Area
const texture = PIXI.Texture.from('sources/img/player.png');
const player = new PIXI.Sprite(texture);
player.x = app.renderer.width / 2;
player.y = app.renderer.height / 1.3;
player.anchor.x = 0.5;
player.anchor.y = 0.5;
app.stage.addChild(player);