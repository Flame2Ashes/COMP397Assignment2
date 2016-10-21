/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
//Source file: game.ts
//Author name: Angelina Gutierrez
//Last modified: October 19th 2016
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this);
            this._targetTimer = 0;
            this._bottleTimer = 0;
            this._ammoTimer = 0;
        }
        // PUBLIC FUNCTIONS
        Game.prototype.start = function () {
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
        };
        //Spawn a target
        Game.prototype.spawnTarget = function () {
            var _newTarget = new objects.Target("target");
            _newTarget.setPosition(new objects.Vector2(config.Screen.WIDTH + 120, Math.floor((Math.random() * config.Screen.CENTER_Y)) + 60));
            _newTarget.on("click", this._onTargetClick, this);
            this.addChild(_newTarget);
            this._targets.push(_newTarget);
            this._targetTimer = 0;
        };
        Game.prototype.spawnBottle = function () {
            var _newBottle = new objects.Bottle("bottle");
            _newBottle.setPosition(new objects.Vector2(-120, Math.floor((Math.random() * config.Screen.CENTER_Y)) + 60));
            _newBottle.on("click", this._onBottleClick, this);
            this.addChild(_newBottle);
            this._bottles.push(_newBottle);
            this._bottleTimer = 0;
        };
        Game.prototype.spawnAmmo = function () {
            var _newAmmo = new objects.Ammo("ammo");
            _newAmmo.setPosition(new objects.Vector2(config.Screen.WIDTH + 120, Math.floor((Math.random() * config.Screen.CENTER_Y)) + 60));
            _newAmmo.on("click", this._onAmmoClick, this);
            this.addChild(_newAmmo);
            this._ammos.push(_newAmmo);
            this._ammoTimer = 0;
        };
        Game.prototype.update = function () {
            if (this._targets != null) {
                this._targets.forEach(function (target) {
                    target.update();
                });
            }
            if (this._bottles != null) {
                this._bottles.forEach(function (bottle) {
                    bottle.update();
                });
            }
            if (this._ammos != null) {
                this._ammos.forEach(function (ammo) {
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
            if (this._ammoTimer >= Math.random() * 400000) {
                this.spawnAmmo();
            }
            // Update objects
        };
        Game.prototype._click = function (event) {
            ammo -= 1;
            this._ammoLabel.text = "Ammo: " + ammo;
            if (ammo == 0) {
                stage.removeAllEventListeners();
                scene = config.Scene.GAMEOVER;
                changeScene();
            }
        };
        Game.prototype._onTargetClick = function (event) {
            score += 100;
            this._scoreLabel.text = "Score: " + score;
        };
        Game.prototype._onBottleClick = function (event) {
            score += 500;
            this._scoreLabel.text = "Score: " + score;
        };
        Game.prototype._onAmmoClick = function (event) {
            ammo += 5;
            this._ammoLabel.text = "Ammo: " + ammo;
        };
        return Game;
    })(objects.Scene);
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map