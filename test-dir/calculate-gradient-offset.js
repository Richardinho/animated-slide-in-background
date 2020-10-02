"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateGradientOffset = void 0;
function toRad(degrees) {
    return degrees * (Math.PI / 180);
}
function calculateGradientOffset(angle, elWidth, bgHeight) {
    var ang = 90 - angle;
    var remainder = elWidth * Math.sin(toRad(ang));
    var offset = bgHeight * Math.cos(toRad(ang));
    var gradLength = remainder + offset;
    return (offset / gradLength) * 100;
}
exports.calculateGradientOffset = calculateGradientOffset;
