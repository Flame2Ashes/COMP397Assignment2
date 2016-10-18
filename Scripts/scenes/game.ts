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
       
            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

      
    }
}