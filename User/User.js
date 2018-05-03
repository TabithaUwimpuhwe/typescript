"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(inUserName, inPassword, inFirstName, inLastName, inEmail, inPhoneNumber, inIsReviewer, inIsAdmin) {
        this.userName = inUserName;
        this.password = inPassword;
        this.firstName = inFirstName;
        this.lastName = inLastName;
        this.email = inEmail;
        this.phoneNumber = inPhoneNumber;
        this.isReviewer = inIsReviewer;
        this.isAdmin = inIsAdmin;
    }
    User.prototype.about = function () {
        return "User: id=" + this.id + ", userName=" + this.userName + ",  password=" + this.password + ", firstName=" + this.firstName + ", lastName=" + this.firstName + ", email=" + this.email + ", phonenumber=" + this.phoneNumber + ", isReviewer=" + (this.isReviewer ? "Yes" : "No") + ", isAdmin?=" + (this.isAdmin ? "Yes" : "No");
    };
    return User;
}());
exports.User = User;
