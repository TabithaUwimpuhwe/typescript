"use strict";
exports.__esModule = true;
var Friend_1 = require("./Friend");
var f1 = new Friend_1.Friend("Frantz", 55, "frantz@yahoo.com", true);
var f2 = new Friend_1.Friend("Gabeau", 53, "gabeau@yahoo.com", true);
var f3 = new Friend_1.Friend("Marc", 47, "mark@yahoo.com", true);
var f4 = new Friend_1.Friend("Gatsinzi", 50, "gatsinzi@yahoo.com", false);
var f5 = new Friend_1.Friend("Josee", 34, "jose@yahoo.com", false);
var fArray = [f1, f2, f3, f4, f5];
for (var _i = 0, fArray_1 = fArray; _i < fArray_1.length; _i++) {
    var f = fArray_1[_i];
    console.log(f.about());
}
