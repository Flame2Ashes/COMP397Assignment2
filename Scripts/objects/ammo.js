var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Ammo = (function (_super) {
        __extends(Ammo, _super);
        function Ammo(imageString) {
            _super.call(this, targetAtlas, imageString, "ammo");
            this._ammo = 5;
            this.name = "ammo";
            this.position = new objects.Vector2(config.Screen.WIDTH, config.Screen.CENTER_Y);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = 3;
            this.on("click", this._reload, this);
        }
        Ammo.prototype.update = function () {
            _super.prototype.update.call(this);
            this.position.x -= this._speed;
        };
        Ammo.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Ammo.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Ammo.prototype._reload = function () {
            this.destroy();
            this._ammo += 5;
        };
        return Ammo;
    })(objects.GameObject);
    objects.Ammo = Ammo;
})(objects || (objects = {}));
//# sourceMappingURL=ammo.js.map