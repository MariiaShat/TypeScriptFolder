var Rect = /** @class */ (function () {
    function Rect(x, y) {
        this.MAX_COORD = 1000;
        this.x1;
    }
    Rect.prototype.square = function () {
        return Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2);
    };
    return Rect;
}());
var rect1 = new Rect(10, 9);
var rect2 = new Rect();
// rect1.x1=4;
rect1.x2 = 8;
// rect1.y1=188393;
console.log(rect1.square());
