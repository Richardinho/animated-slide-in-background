"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBackgroundHeight = void 0;
function toRad(degrees) {
    return degrees * (Math.PI / 180);
}
/*
 *  take angle in degrees, height and width in pixels
 *  and return height of background in pixels
 */
function calculateBackgroundHeight(angle, height, width) {
    return width / Math.tan(toRad(angle)) + height;
}
exports.calculateBackgroundHeight = calculateBackgroundHeight;
