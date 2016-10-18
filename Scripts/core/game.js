//Source file: game.ts
//Author name: Angelina Gutierrez
//Last modified: October 16, 2016
/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
//Spritesheet Variables
var spriteSheetLoader;
var brokenBottle_anim;
var brokenTarget_anim;
var score = 0;
var currentScene;
var scene;
// Game scenes
var menuScene;
var gameScene;
// Preload Assets required
var assetData = [
    { id: "Game_BG", src: "../../Assets/images/gamebg.png" },
    { id: "bottle", src: "../../Assets/images/bottle.png" },
    { id: "target", src: "../../Assets/images/target.png" },
    { id: "brokenBottle", src: "../../Assets/images/brokenBottle.png" },
    { id: "brokenTarget", src: "../../Assets/images/brokenTarget.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
    var bottleData = {
        "images": [
            assets.getResult("brokenBottle")
        ],
        "frames": [
            [1, 1, 58, 135, 0, 0, 0],
            [61, 1, 42, 120, 0, 0, 0]
        ],
        "animations": {
            "brokenBottles": {
                "frames": [0, 1], "speed": 0.1, next: false
            },
        },
        "texturepacker": [
            "SmartUpdateHash: $TexturePacker:SmartUpdate:115dcfacce1f2cbce5d41c27d893b0de:2d5372700921ab1d1d995688762b8a0d:b40ecb7c03d838604c9408690bdd0dae$",
            "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ]
    };
    var targetData = {
        "images": [
            assets.getResult("brokenTarget")
        ],
        "frames": [
            [1, 1, 120, 120, 0, 0, 0],
            [123, 1, 120, 120, 0, 0, 0]
        ],
        "animations": {
            "brokenTargets": {
                "frames": [0, 1], "speed": 0.1, next: false
            },
        },
        "texturepacker": [
            "SmartUpdateHash: $TexturePacker:SmartUpdate:17278d714bba56b764ad2c6e5c212846:cbdcd48e1ffef5698fb926c9bf714e97:970d575b3b180d738e4e9e5103f8c17c$",
            "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ]
    };
    brokenBottle_anim = new createjs.SpriteSheet(bottleData);
    brokenTarget_anim = new createjs.SpriteSheet(targetData);
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.Game();
            console.log("Starting GAME scene");
            break;
    }
}
//# sourceMappingURL=game.js.map