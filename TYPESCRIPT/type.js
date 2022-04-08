"use strict";
exports.__esModule = true;
exports.areaCerchio = exports.areaQuadrato = exports.areaTriangolo = void 0;
function areaTriangolo(t) {
    return this.base * this.altezza / 2;
}
exports.areaTriangolo = areaTriangolo;
function areaQuadrato(q) {
    return this.lato * this.lato;
}
exports.areaQuadrato = areaQuadrato;
function areaCerchio(c) {
    return 3.14 * this.raggio * this.raggio;
}
exports.areaCerchio = areaCerchio;
