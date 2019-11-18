"use strict";
exports.__esModule = true;
var puppy = /** @class */ (function () {
    function puppy() {
    }
    // this is a method
    puppy.prototype.bark = function () {
        return 'Gav gav!!'; //what Russian dogs say, apparently
    };
    return puppy;
}());
exports.puppy = puppy;
var hotdog = new puppy();
console.log(hotdog.bark());
