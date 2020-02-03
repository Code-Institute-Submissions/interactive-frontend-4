// Create the enemies

describe(let numberOfBirds = 10,
        spacing = 48,
        xOffset = 150,
        speed = 2,
        direction = 1;

    // Array to store the enemies
    birdEnemies = [];

    for (let i = 0; i < numberOfBirds; i++) {
        let birdEnemie = new PIXI.Sprite(enemie);
        let x = spacing * i + xOffset;
        let y = randomInt(0, stage.height - birdEnemie.height);
        birdEnemie.x = x;
        birdEnemie.y = y;
        birdEnemie.vy = spedd * direction;
        direction *= -1;
        birdEnemies.push(birdEnemie);
        stage.addChild(birdEnemie)
    }
);