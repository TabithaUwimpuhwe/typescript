"use strict";
exports.__esModule = true;
var Game_1 = require("./Game");
var game = new Game_1.Game();
var numGames = 1000000;
var highest = 0;
for (var i = 0; i < numGames; i++) {
    var score = game.play();
    if (score > highest) {
        highest = score;
    }
}
console.log("highest score is: " + highest);
