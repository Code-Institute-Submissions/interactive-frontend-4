$(document).ready(function() {
    // Retrieving data from the user
    let user;

    function checkInput() {
        // Start with the game with a user name
        if (user != null && user.trim() != '') {
            window;
        } else {
            alert("Please enter a user name to play");
            getinput();

        }

    }

    function getinput() {
        user = prompt("User Name", "");
        $('#name').text(user);
        checkInput();
    }

    getinput();

});


$(document).ready(function(window) {
    let ParticleExample = function(imagePaths, config, useParticleContainer) {
        let canvas = document.getElementById("stage");
        // Basic PIXI Setup
        let rendererOptions = {
            view: canvas,
        };

        let stage = new PIXI.Container(),
            // Exploding Particle filter for PixiJS set on null thanks to this answer https://www.sitepoint.com/community/t/why-you-set-variable-to-null-at-the-beginning-of-javascript/35038    
            emitter = null,
            renderer = PIXI.autoDetectRenderer(canvas.width, canvas.height, rendererOptions),
            bg = null;

        let particleCount = document.getElementById("particleCount");

        let lastScore = localStorage.getItem("score");
        if (lastScore == null) {
            lastScore = 'Not Present'
        } else {
            //is fine
        }
        $("#score-num").text("Last score: " + lastScore);



        // Kills score based on this solution https://codepen.io/b3nny1080/pen/vxZzJP
        let hitCounter = 0;

        // Countdown Timer based on this solution https://jsfiddle.net/satyasrinivaschekuri/y03m54Le/
        let counter = 60;
        let interval = setInterval(function() {
            counter--;
            if (counter <= 0) {
                clearInterval(interval);
                alert('Game Over');
                location.reload(stage);
            } else {
                $("#time").text(counter);
            }


        }, 1000);



        // loading my images
        let background = PIXI.Texture.fromImage('sources/img/bg.png');
        let tank = PIXI.Texture.fromImage('sources/img/player.png');
        let zombomb = PIXI.Texture.fromImage('sources/img/zombie.png');
        let enemie = PIXI.Texture.fromImage('sources/img/birdenemie.png');

        // calling the image for my player
        let player = new PIXI.Sprite(tank);
        // center player's anchor point
        player.anchor.x = 0.5;
        player.anchor.y = 0.5;

        // move the sprite to its position
        player.position.x = 150;
        player.position.y = 310;

        let birdEnemie = new PIXI.Sprite(enemie);

        // Allows all game components to work
        stage.interactive = true;

        stage.on("mousedown", function(e) {
            shoot(player.rotation, {
                x: player.position.x + Math.cos(player.rotation) * 20,
                y: player.position.y + Math.sin(player.rotation) * 20
            });
        })

        // Shoot function for mobile devices, failed on rotation
        stage.on("touchend", function(e) {
            shoot(player.rotation, {
                x: player.position.x + Math.cos(player.rotation) * 20,
                y: player.position.y + Math.sin(player.rotation) * 20
            });
        })

        let bullets = [];
        let bulletSpeed = 5;

        // Collision detection reference from Pixi JS https://github.com/kittykatattack/learningPixi/blob/master/examples/16_collisionDetection.html
        function hitTestRectangle(r1, r2) {

            //Calculate `centerX` and `centerY` properties on the sprites
            r1.centerX = r1.x + r1.width / 2;
            r1.centerY = r1.y + r1.height / 2;
            r2.centerX = r2.x + r2.width / 2;
            r2.centerY = r2.y + r2.height / 2;

            //Calculate the `halfWidth` and `halfHeight` properties of the sprites
            r1.halfWidth = r1.width / 2;
            r1.halfHeight = r1.height / 2;
            r2.halfWidth = r2.width / 2;
            r2.halfHeight = r2.height / 2;

            //Create a `collision` variable that will tell us if a collision is occurring
            let collision = false;

            //Check whether the shapes of the sprites are overlapping. If they are, set `collision` to `true`
            if (Math.abs(r1.centerX - r2.centerX) < r1.halfWidth + r2.halfWidth &&
                Math.abs(r1.centerY - r2.centerY) < r1.halfHeight + r2.halfHeight) {
                collision = true;
            }

            //Return the value of `collision` back to the main program
            return collision;
        }

        // Shooting zombies function
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


        // Emitter Plugin - Explosion effect

        // Calculate the current time
        let elapsed = Date.now();

        let updateId;

        // Update function every frame
        let update = function() {

            // Update the next frame
            updateId = requestAnimationFrame(update);

            let now = Date.now();
            if (emitter)
                emitter.update((now - elapsed) * 0.001);

            elapsed = now;

            if (emitter && particleCount)
                particleCount.innerHTML = emitter.particleCount;


            // Player motion active and shooting
            player.rotation = rotateToPoint(renderer.plugins.interaction.mouse.global.x, renderer.plugins.interaction.mouse.global.y, player.position.x, player.position.y);

            // Action for shooting zombies
            for (let b = 0; b < bullets.length; b++) {

                if (bullets[b] != null) {

                    bullets[b].position.x += Math.cos(bullets[b].rotation) * bulletSpeed;
                    bullets[b].position.y += Math.sin(bullets[b].rotation) * bulletSpeed;

                    // Destroying the birds action
                    if (hitTestRectangle(bullets[b], birdEnemie)) {

                        // Kills counter
                        hitCounter += 1;
                        document.getElementById("hitCounter").innerHTML = hitCounter;

                        // Keep Score
                        localStorage.setItem("score", hitCounter);

                        // Creating multiple enemies
                        if (!emitter) return;
                        emitter.emit = true;
                        emitter.resetPositionTracking();
                        emitter.updateOwnerPos(birdEnemie.centerX, birdEnemie.centerY);

                        bullets[b].destroy();
                        bullets[b] = null;

                        // Move enemies on game area
                        birdEnemie.position.x = Math.random() * renderer.width;
                        birdEnemie.position.y = Math.random() * renderer.height;


                    } else {
                        console.log("No collision");
                    }
                }

            }

            // Launch game components
            renderer.render(stage);
        };

        // Resize the canvas to the size of the window
        window.onresize = function(event) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderer.resize(canvas.width, canvas.height);
            if (bg) {
                //bg is a 1px by 1px image
                bg.scale.x = canvas.width;
                bg.scale.y = canvas.height;
            }
        };
        window.onresize();

        // Preload the particle images and create PIXI textures from it
        let urls, makeTextures = false;
        if (imagePaths.spritesheet)
            urls = [imagePaths.spritesheet];
        else if (imagePaths.textures)
            urls = imagePaths.textures.slice();
        else {
            urls = imagePaths.slice();
            makeTextures = true;
        }
        urls.push(background);
        let loader = PIXI.loader;
        for (let i = 0; i < urls.length; ++i)
            loader.add("img" + i, urls[i]);
        loader.load(function() {
            let bg = new PIXI.Sprite(background);
            bg.scale.x = canvas.width;
            bg.scale.y = canvas.height;
            bg.transparent = false;
            stage.addChild(bg);

            stage.addChild(player);

            // Random location and creation of enemies
            birdEnemie.position.x = Math.random() * renderer.width;
            birdEnemie.position.y = Math.random() * renderer.height;

            stage.addChild(birdEnemie);

            // Collect the textures, now that they are all loaded
            let art;
            if (makeTextures) {
                art = [];
                for (let i = 0; i < imagePaths.length; ++i)
                    art.push(PIXI.Texture.fromImage(imagePaths[i]));
            } else
                art = imagePaths.art;

            // Create the new emitter and attach it to the stage
            let emitterContainer;
            if (useParticleContainer) {
                emitterContainer = new PIXI.ParticleContainer();
                emitterContainer.setProperties({
                    scale: true,
                    position: true,
                    rotation: true,
                    uvs: true,
                    alpha: true
                });
            } else
                emitterContainer = new PIXI.Container();

            stage.addChild(emitterContainer);

            window.emitter = emitter = new PIXI.particles.Emitter(
                emitterContainer,
                art,
                config
            );

            // Start the update
            emitter.emit = false;

            update();

        });
    };

    // Assign to global space
    window.ParticleExample = ParticleExample;

}(window));