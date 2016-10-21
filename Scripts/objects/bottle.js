var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Bottle = (function (_super) {
        __extends(Bottle, _super);
        function Bottle(imageString) {
            _super.call(this, imageString, "bottleBreak");
            this.name = "bottle";
            this.position = new objects.Vector2(-120, Math.floor((Math.random() * config.Screen.CENTER_Y)) + 60);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = 10;
            this.on("click", this._onButtonClick, this);
        }
        Bottle.prototype.update = function () {
            _super.prototype.update.call(this);
            this.position.x += this._speed;
            //Remove upon leaving view of screen
            if (this.position.x >= config.Screen.WIDTH + 120) {
                currentScene.removeChild(this);
            }
        };
        Bottle.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Bottle.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Bottle.prototype._onButtonClick = function (event) {
            this.destroy();
        };
        return Bottle;
    })(objects.GameObject);
    objects.Bottle = Bottle;
})(objects || (objects = {}));
//# sourceMappingURL=bottle.js.map