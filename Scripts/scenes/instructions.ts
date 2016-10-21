module scenes {
    export class Instructions extends objects.Scene {
        
        private _instructionbg : createjs.Bitmap;
        private _gameButton : objects.Button;
        private _menuButton : objects.Button;

        constructor() {
            super();
        }

        public start() : void {
            console.log("Instructions scene started");

            //Add the background

            this._instructionbg = new createjs.Bitmap(assets.getResult("Instructions_BG"));
            this.addChild(this._instructionbg);

            //Buttons

            this._gameButton = new objects.Button("start", config.Screen.CENTER_X - 300, config.Screen.CENTER_Y + 175);
            this.addChild(this._gameButton);
            this._gameButton.on("click", this._startButtonClick, this);

            this._menuButton = new objects.Button("back", config.Screen.CENTER_X + 250, config.Screen.CENTER_Y + 175);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._menuButtonClick, this);

            stage.addChild(this);
        }

            private _startButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            ammo = 11;
            scene = config.Scene.GAME;
            changeScene();
        }
            private _menuButtonClick(event : createjs.MouseEvent) {
                scene = config.Scene.MENU;
                changeScene();
            }
    }
}