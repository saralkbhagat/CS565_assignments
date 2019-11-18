"use strict";
exports.__esModule = true;
var puppy = /** @class */ (function () {
    function puppy(name) {
        this.name = name;
    }
    puppy.prototype.bark = function () {
        return 'Gav! my name is ' + this.name;
    };
    return puppy;
}());
exports.puppy = puppy;
