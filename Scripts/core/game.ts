//Source file: game.ts
//Author name: Angelina Gutierrez
//Last modified: October 16, 2016

/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

//Spritesheet Variables
var spriteSheetLoader : createjs.SpriteSheetLoader;
var targetAtlas : createjs.SpriteSheet;

var score : number = 0;

var currentScene : objects.Scene;
var scene: number;

// Game scenes
var menuScene : scenes.Menu;
var gameScene : scenes.Game;

// Preload Assets required
var assetData:objects.Asset[] = [
    //Assets
    {id: "Game_BG", src: "../../Assets/images/gamebg.png"},
    {id: "Menu_BG", src: "../../Assets/images/menubg.png"},
    {id: "start", src: "../../Assets/images/start.png"},
    {id: "instructions", src: "../Assets/images/instructions.png"},
    {id: "targetAtlas", src: "../../Assets/images/targetAtlas.png"}
   
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

    //Create AtlasData

    let atlasData = {
        "images": [
            assets.getResult("targetAtlas")
        ],

        "frames": [
            [1, 1, 58, 135, 0, 0, 0],
            [1, 138, 95, 112, 0, 0, 0],
            [61, 1, 120, 120, 0, 0, 0],
            [98, 123, 120, 120, 0, 0, 0],
            [183, 1, 120, 120, 0, 0, 0],
            [220, 123, 42, 120, 0, 0, 0],
            [264, 123, 42, 120, 0, 0, 0]
    ],
        "animations": {
            "targetBreak": {
                "frames": [2, 3], "speed": 0.1, next: false
            },

            "bottleBreak": {
                "frames": [5, 0], "speed": 0.1, next: false
            },
            
            "target": {"frames": [4]},
            "bottle": {"frames": [6]},
            "ammo": {"frames": [1]}
        },
        
        "texturepacker": [
        "SmartUpdateHash: $TexturePacker:SmartUpdate:b31f27273ee20ff5fbea1409d2a66696:99d5e8aadb7c7f1eaec0dfc2bb9cd0b3:01b4a05c7f6807936f8426c41592daed$",
        "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
            ]
    }

    //Assign to targetAtlas

    targetAtlas = new createjs.SpriteSheet(atlasData);

    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME :
            stage.removeAllChildren();
            currentScene = new scenes.Game();
            console.log("Starting GAME scene");
            break;

        case config.Scene.INSTRUCTIONS :
            stage.removeAllChildren();
            currentScene = new scenes.Instructions();
            console.log("Starting INSTRUCTIONS scene");
            break;
     
    }
    
}