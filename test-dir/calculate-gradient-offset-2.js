"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateGradientOffset2 = void 0;
function toRad(degrees) {
    return degrees * (Math.PI / 180);
}
function calculateGradientOffset2(angle, elWidth, bgHeight) {
    var ang = 90 - angle;
    console.log(angle, elWidth, bgHeight);
    var X = elWidth * Math.sin(toRad(ang));
    var offset = bgHeight * Math.cos(toRad(ang));
    var gradLength = X + offset;
    return (offset / gradLength) * 100;
}
exports.calculateGradientOffset2 = calculateGradientOffset2;
