//Parameters taken from this source to make emmiter to work https://github.com/pixijs/pixi-particles/blob/master/docs/examples/spaceshipDestruction.html
new ParticleExample(
    // The image to use
    {
        spritesheet: "sources/img/birdPieces.json",
        art: [
            "weaponPod",
            "leftWing",
            "rightEngine",
            "hullFront",
            "weaponPod",
            "rightWing",
            "hullRear",
            "leftEngine"
        ]
    },

    // Emitter configuration, edit this to change the look
    // of the emitter
    {
        "alpha": {
            "start": 1,
            "end": 1
        },
        "scale": {
            "start": 1,
            "end": 1
        },
        "color": {
            "start": "ffffff",
            "end": "666666"
        },
        "speed": {
            "start": 100,
            "end": 50
        },
        "startRotation": {
            "min": 0,
            "max": 360
        },
        "rotationSpeed": {
            "min": 30,
            "max": 360
        },
        "lifetime": {
            "min": 2,
            "max": 2
        },
        // long enough for one burst
        "frequency": 0.05,
        "emitterLifetime": 0.06,
        "maxParticles": 1000,
        "pos": {
            "x": 0,
            "y": 0
        },
        "addAtBack": false,
        // bursts happen in waves
        "spawnType": "burst",
        // enough particles per wave to handle all ship parts
        "particlesPerWave": 8,
        "particleSpacing": 0,
        "angleStart": 0,
        // The important part here - use each image/art object once instead of random selections
        "orderedArt": true
    }
);