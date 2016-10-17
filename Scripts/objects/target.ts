module objects {
    export class Target extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;

          // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string) {
            super(imageString, "brokenTarget");

            this.name = "target";
            this.position = new objects.Vector2(config.Screen.WIDTH, config.Screen.CENTER_Y);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = 10;

        }

        public update() : void {
            super.update();
            this.position.x -= this._speed;
        }
    }
}