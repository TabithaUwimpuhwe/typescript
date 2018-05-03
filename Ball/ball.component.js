"use strict";
exports.__esModule = true;
var Ball_1 = require("./Ball");
var ballservice_1 = require("./ballservice");
var BallComponent = /** @class */ (function () {
    function BallComponent(bSvc) {
        this.ballSvc = bSvc; //same as this.ballSvc = BallService
        console.log("BallComponent intialized!");
    }
    return BallComponent;
}());
exports.BallComponent = BallComponent;
//define a variable that reference Component
var ballComp = new BallComponent(new ballservice_1.BallService());
var b1 = new Ball_1.Ball("red", "small"); //get rid of the id
var b2 = new Ball_1.Ball("black", "small");
var b3 = new Ball_1.Ball("green", "medium");
ballComp.ballSvc.add(b1);
ballComp.ballSvc.add(b2);
ballComp.ballSvc.add(b3);
for (var _i = 0, _a = ballComp.ballSvc.list(); _i < _a.length; _i++) {
    var ball = _a[_i];
    console.log(ball.about());
}
console.log("remove an item ....");
ballComp.ballSvc.remove(b2.id);
for (var _b = 0, _c = ballComp.ballSvc.list(); _b < _c.length; _b++) {
    var ball = _c[_b];
    console.log(ball.about());
}
console.log("Bye!");
//let bArray: Ball[] = [b1, b2, b3];
//for (let b of bArray) {
//    console.log(b.about());
//}
