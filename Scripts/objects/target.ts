module objects {
    export class Target extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;
        private _scoreValue;
        

          // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString : string) {
            super(imageString, "targetBreak");

            this.name = "target";
            this.position = new objects.Vector2(config.Screen.WIDTH + 120, Math.floor((Math.random() * config.Screen.CENTER_Y)) + 60);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = 5;
            this.on("click", this._onButtonClick, this);

        }

        public update() : void {
            super.update();
            this.position.x -= this._speed;
            //Remove upon leaving view of screen
            if (this.position.x <= -120) {
                currentScene.removeChild(this);
            }
        }

        
          public setPosition(pos : objects.Vector2) : void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        private _onButtonClick(event : createjs.MouseEvent) {
            this.destroy();
        }
    }
}