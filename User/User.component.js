"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var UserService_1 = require("./UserService");
var UserComponent = /** @class */ (function () {
    function UserComponent(uSvc) {
        this.userSvc = uSvc; //same as this.userSvc = UserService
        console.log("UserComponent intialized!");
    }
    return UserComponent;
}());
exports.UserComponent = UserComponent;
var userComp = new UserComponent(new UserService_1.UserService());
var u1 = new User_1.User("Frantz", "xxxx", "Frantz", "Gabeau", "frantz@yahoo.com", "555-555-5555", false, false);
var u2 = new User_1.User("Frantz", "xxxx", "Frantz", "Gabeau", "frantz@yahoo.com", "555-555-5555", false, false);
var u3 = new User_1.User("Frantz", "xxxx", "Frantz", "Gabeau", "frantz@yahoo.com", "555-555-5555", false, false);
var u4 = new User_1.User("Frantz", "xxxx", "Frantz", "Gabeau", "frantz@yahoo.com", "555-555-5555", false, false);
var u5 = new User_1.User("Frantz", "xxxx", "Frantz", "Gabeau", "frantz@yahoo.com", "555-555-5555", false, false);
userComp.userSvc.add(u1);
userComp.userSvc.add(u2);
userComp.userSvc.add(u3);
userComp.userSvc.add(u4);
userComp.userSvc.add(u5);
for (var _i = 0, _a = userComp.userSvc.list(); _i < _a.length; _i++) {
    var User_2 = _a[_i];
    console.log(User_2.about());
}
console.log("remove an item ....");
userComp.userSvc.remove(u2.id);
for (var _b = 0, _c = userComp.userSvc.list(); _b < _c.length; _b++) {
    var user = _c[_b];
    console.log(user.about());
}
console.log("Bye!");
