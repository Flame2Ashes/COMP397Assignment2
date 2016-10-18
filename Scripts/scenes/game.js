/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
//Source file: game.ts
//Author name: Angelina Gutierrez
//Last modified: October 3rd 2016
//Intro scene
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
        }
        // PUBLIC FUNCTIONS
        Game.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            //Add background
            this._gamebg = new createjs.Bitmap(assets.getResult("Game_BG"));
            this.addChild(this._gamebg);
            this._target = new objects.Target("target");
            this.addChild(this._target);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Game.prototype.update = function () {
            // Update objects
        };
        return Game;
    })(objects.Scene);
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map