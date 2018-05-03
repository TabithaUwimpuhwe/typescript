"use strict";
exports.__esModule = true;
var UserService = /** @class */ (function () {
    function UserService() {
        this.UserList = [];
        this.nextId = 1;
    }
    UserService.prototype.add = function (User) {
        User.id = this.nextId++;
        this.UserList.push(User); // we need this to reference an attribute;
        return "success";
    };
    UserService.prototype.list = function () {
        return this.UserList;
    };
    UserService.prototype.remove = function (id) {
        var index = -1;
        for (var idx = 0; idx < this.UserList.length; idx++) {
            if (id == this.UserList[idx].id) {
                index = idx;
                break;
            }
        }
        this.UserList.splice(index, 1);
        return "Removed.";
    };
    return UserService;
}());
exports.UserService = UserService;
