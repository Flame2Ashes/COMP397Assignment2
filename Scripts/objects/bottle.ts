module objects {
    export class Bottle extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;
        private _scoreValue;
        

          // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString : string) {
            super(imageString, "bottleBreak");

            this.name = "bottle";
            this.position = new objects.Vector2(-120, Math.floor((Math.random() * config.Screen.CENTER_Y)) + 60);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = 10;
            this.on("click", this._onButtonClick, this);

        }

        public update() : void {
            super.update();
            this.position.x += this._speed;
            //Remove upon leaving view of screen
            if (this.position.x >= config.Screen.WIDTH + 120) {
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