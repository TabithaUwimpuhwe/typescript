"use strict";
exports.__esModule = true;
var Game = /** @class */ (function () {
    function Game() {
        //empty constructor bc the function die () method get the random number for us, we don't set/get anything; but still have to have this empty constructor
    }
    Game.prototype.die = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    Game.prototype.play = function () {
        var total = 0; //value will be added each time you play (score)
        while (true) {
            var roll = this.die();
            if (roll == 1) {
                break;
            }
            else {
                total += roll;
            }
        }
        return total;
    };
    return Game;
}());
exports.Game = Game;
