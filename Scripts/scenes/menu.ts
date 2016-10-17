/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

//Source file: menu.ts
//Author name: Angelina Gutierrez
//Last modified: October 3rd 2016

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _menuButton : objects.Button;
        private _menuButtonGameOver : objects.Button;
        private _menuLabel : objects.Label;
        private _menuBG : createjs.Bitmap;

        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");

            //Add the background
            this._menuBG = new createjs.Bitmap(assets.getResult("MenuScreen"));
            this._menuBG.alpha = 0.5;
            this.addChild(this._menuBG);

            this._menuLabel = new objects.Label("THE CAVE", "100px Arial", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._menuLabel);

            // Add button to scene. Register for click callback function
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _startButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        }
    }
}