"use strict";
exports.__esModule = true;
var Friend = /** @class */ (function () {
    //    define constructors; no getters and setters bc it is public
    function Friend(inName, inAge, inEmail, inBestFriend) {
        this.name = inName;
        this.age = inAge;
        this.email = inEmail;
        this.bestFriend = inBestFriend;
    }
    //use a string `` on P32
    Friend.prototype.about = function () {
        return this.name + ", " + this.age + ", " + this.email + ", " + (this.bestFriend ? "Yes" : "No") + " ";
    };
    return Friend;
}());
exports.Friend = Friend;
