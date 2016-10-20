/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var spriteSheetLoader : createjs.SpriteSheetLoader;
var targetAtlas : createjs.SpriteSheet;


var currentScene : objects.Scene;
var scene: number;


// Preload Assets required
var assetData:objects.Asset[] = [
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
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
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

    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            currentScene = new scenes.Menu();;
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