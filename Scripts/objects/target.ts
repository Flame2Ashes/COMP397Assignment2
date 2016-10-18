module objects {
    export class Target extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;
        

          // public variables
        public name:string;
        public width:number;
        public height:number;
        public scoreValue : number = 100;
        public center:objects.Vector2;

        constructor(animation : createjs.SpriteSheet) {
            super(animation, "target");

            this.name = "target";
            this.position = new objects.Vector2(config.Screen.WIDTH, config.Screen.CENTER_Y);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = 10;
            this.on("click", this._onButtonClick, this);

        }

        public update() : void {
            super.update();
            this.position.x -= this._speed;
        }

        private _onButtonClick(event : createjs.MouseEvent) {
            this.destroy();
        }
    }
}