"use strict";
exports.__esModule = true;
var Codelab = /** @class */ (function () {
    function Codelab(guests) {
        this.guests = guests;
    }
    Codelab.prototype.getGuestsComing = function () {
        return this.guests.filter(function (g) { return g.coming == true; });
    };
    return Codelab;
}());
exports.Codelab = Codelab;
