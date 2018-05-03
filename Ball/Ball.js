"use strict";
exports.__esModule = true;
var Ball = /** @class */ (function () {
    //    define constructors; no getters and setters bc it is public
    function Ball(inColor, inSize) {
        // this.id=inId;  
        this.color = inColor;
        this.color = inColor;
        this.size = inSize;
    }
    //use a string `` on P32
    Ball.prototype.about = function () {
        return "Ball: id=" + this.id + ", color=" + this.color + ", size=" + this.size;
    };
    return Ball;
}());
exports.Ball = Ball;
