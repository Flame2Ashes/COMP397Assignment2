/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
//Source file: game.ts
//Author name: Angelina Gutierrez
//Last modified: October 19th 2016

module scenes {
    export class Game extends objects.Scene {

        // PRIVATE VARIABLES
      
        private _gamebg : createjs.Bitmap; //The background
        private _target : objects.Target;
        private _targets : objects.Target[];
        private _bottle : objects.Bottle;
        private _bottles : objects.Bottle[];
        private _ammo : objects.Ammo;
        private _ammos : objects.Ammo[];
        private _targetTimer : number = 0;
        private _bottleTimer : number = 0;
        private _ammoTimer : number = 0;
        private _scoreLabel : objects.Label;
        private _ammoLabel : objects.Label;

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

            //Labels

            this._scoreLabel = new objects.Label("Score: " + score, "60px Arial", "#ffffff", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y + 200);
            this.addChild(this._scoreLabel);

            this._ammoLabel = new objects.Label("Ammo: " + ammo, "60px Arial", "#ffffff", config.Screen.CENTER_X + 250, config.Screen.CENTER_Y + 200);
            this.addChild(this._ammoLabel);

            //initialize arrays
            this._targets = [];
            this._bottles = [];
            this._ammos = [];
            stage.on("click", this._click, this);

            
       
        
            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

            //Spawn a target
        public spawnTarget() : void {
            var _newTarget = new objects.Target("target");
            _newTarget.setPosition( new objects.Vector2(config.Screen.WIDTH + 120, Math.floor((Math.random() * config.Screen.CENTER_Y)) + 60));
            _newTarget.on("click", this._onTargetClick, this);
            this.addChild(_newTarget);
            this._targets.push(_newTarget);
            this._targetTimer = 0;
        }

         public spawnBottle() : void {
            var _newBottle = new objects.Bottle("bottle");
            _newBottle.setPosition(new objects.Vector2(-120, Math.floor((Math.random() * config.Screen.CENTER_Y)) + 60));
             _newBottle.on("click", this._onBottleClick, this);
            this.addChild(_newBottle);
            this._bottles.push(_newBottle);
            this._bottleTimer = 0;
        }

        public spawnAmmo() : void {
            var _newAmmo = new objects.Ammo("ammo");
            _newAmmo.setPosition(new objects.Vector2(config.Screen.WIDTH + 120, Math.floor((Math.random() * config.Screen.CENTER_Y)) + 60));
             _newAmmo.on("click", this._onAmmoClick, this);
            this.addChild(_newAmmo);
            this._ammos.push(_newAmmo);
            this._ammoTimer = 0;
        }

        public update() : void {
       
            if (this._targets != null) {

            this._targets.forEach (target => {
            target.update()
            });
            }

        
        if (this._bottles != null) {
            this._bottles.forEach (bottle => {
                bottle.update();
            });
        }
        if (this._ammos != null) {
            this._ammos.forEach (ammo => {
                ammo.update();
            });
        }

        this._targetTimer += createjs.Ticker.interval;
        this._bottleTimer += createjs.Ticker.interval;
        this._ammoTimer += createjs.Ticker.interval;

        if (this._targetTimer >= Math.random() * 200000) {
            this.spawnTarget();
        }
        if (this._bottleTimer >= Math.random() * 200000) {
            this.spawnBottle();
        }
        if (this._ammoTimer >= Math.random() * 500000) {
            this.spawnAmmo();
        }       
        
            // Update objects
        }


      private _click(event : createjs.MouseEvent) : void {
          ammo -= 1;
           this._ammoLabel.text ="Ammo: " + ammo;
           if (ammo == 0) {
               stage.removeAllEventListeners();
             scene = config.Scene.GAMEOVER;
            changeScene();
        }
      }
    
      private _onTargetClick(event : createjs.MouseEvent) : void {
          score += 100;
          this._scoreLabel.text = "Score: " + score;
      }

      private _onBottleClick(event : createjs.MouseEvent) : void {
          score += 500;
          this._scoreLabel.text = "Score: " + score;
      }

      private _onAmmoClick(event : createjs.MouseEvent) : void {
          ammo += 6;
          this._ammoLabel.text ="Ammo: " + ammo;
      }
    }
}