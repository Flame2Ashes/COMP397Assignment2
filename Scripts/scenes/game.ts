/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
//Source file: game.ts
//Author name: Angelina Gutierrez
//Last modified: October 3rd 2016
//Intro scene

module scenes {
    export class Game extends objects.Scene {

        // PRIVATE VARIABLES
      
        private _gamebg : createjs.Bitmap; //The background
        private _target : objects.Target;
        private _bottle : objects.Bottle;
        private _ammo : objects.Ammo;
        private _timer : number = 0;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Game scene started");

            //Add background
            this._gamebg = new createjs.Bitmap(assets.getResult("Game_BG"));
            this.addChild(this._gamebg);

            this._target = new objects.Target("target");
            this.addChild(this._target);
            this._bottle = new objects.Bottle("bottle");
            this._bottle.setPosition(new objects.Vector2(0, 0));
            this.addChild(this._bottle);
       
            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
        if (this._target != null) {
            this._target.update()
        }
        if (this._bottle != null) {
            this._bottle.update();
        }
        if (this._ammo != null) {
            this._ammo.update();
        }
            // Update objects
        }

        //Spawn a target
        public spawnTarget() : void {
            this._bottle.setPosition(new objects.Vector2(Math.random() * config.Screen.WIDTH, 0));
            this.addChild(this._bottle);
            this._timer = 0;
        }

      
    }
}