"use strict";
exports.__esModule = true;
exports.Cerchio = exports.Quadrato = exports.Triangolo = void 0;
var type_1 = require("./type");
var Triangolo = /** @class */ (function () {
    function Triangolo(base, altezza) {
        this.base = base;
        this.altezza = altezza;
    }
    Triangolo.prototype.getBase = function () {
        return this.base;
    };
    Triangolo.prototype.getAltezza = function () {
        return this.altezza;
    };
    Triangolo.prototype.setBase = function (base) {
        this.base = base;
    };
    Triangolo.prototype.setAltezza = function (altezza) {
        this.altezza = altezza;
    };
    return Triangolo;
}());
exports.Triangolo = Triangolo;
var Quadrato = /** @class */ (function () {
    function Quadrato(lato) {
        this.lato = lato;
    }
    Quadrato.prototype.getLato = function () {
        return this.lato;
    };
    Quadrato.prototype.setLato = function (lato) {
        this.lato = lato;
    };
    return Quadrato;
}());
exports.Quadrato = Quadrato;
var Cerchio = /** @class */ (function () {
    function Cerchio(raggio) {
        this.raggio = raggio;
    }
    Cerchio.prototype.getRaggio = function () {
        return this.raggio;
    };
    Cerchio.prototype.setRaggio = function (raggio) {
        this.raggio = raggio;
    };
    return Cerchio;
}());
exports.Cerchio = Cerchio;
var triangolo = new Triangolo(5, 6);
function prova() {
    console.log((0, type_1.areaTriangolo)(triangolo));
}
