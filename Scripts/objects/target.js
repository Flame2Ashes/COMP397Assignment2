var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Target = (function (_super) {
        __extends(Target, _super);
        function Target(imageString) {
            _super.call(this, imageString, "targetBreak");
            this.name = "target";
            this.position = new objects.Vector2(config.Screen.WIDTH + 120, Math.floor((Math.random() * config.Screen.CENTER_Y)) + 60);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = 5;
            this.on("click", this._onButtonClick, this);
        }
        Target.prototype.update = function () {
            _super.prototype.update.call(this);
            this.position.x -= this._speed;
            if (this.position.x <= -120) {
                currentScene.removeChild(this);
            }
        };
        Target.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Target.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Target.prototype._onButtonClick = function (event) {
            this.destroy();
            this._scoreValue += 100;
        };
        return Target;
    })(objects.GameObject);
    objects.Target = Target;
})(objects || (objects = {}));
//# sourceMappingURL=target.js.map