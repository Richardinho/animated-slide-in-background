"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
var calculate_quadrant_js_1 = require("./calculate-quadrant.js");
var calculate_background_height_js_1 = require("./calculate-background-height.js");
var calculate_gradient_offset_js_1 = require("./calculate-gradient-offset.js");
function calculate(angle, elWidth, elHeight) {
    var quadrant = calculate_quadrant_js_1.calculateQuadrant(angle);
    var bgHeight = 0;
    var gradientOffset = 0;
    var bgPos1 = '';
    var bgPos2 = '';
    var derivedAngle = 0;
    switch (quadrant) {
        case calculate_quadrant_js_1.RIGHT:
            bgHeight = elHeight;
            bgPos1 = "-" + elWidth + " 0";
            bgPos2 = '0 0';
            gradientOffset = 100;
            break;
        case calculate_quadrant_js_1.BOTTOM:
            bgHeight = elHeight;
            bgPos1 = "0 " + -bgHeight + "px";
            bgPos2 = '0 0';
            gradientOffset = 100;
            break;
        case calculate_quadrant_js_1.LEFT:
            bgHeight = elHeight;
            bgPos1 = elWidth + " 0";
            bgPos2 = '0 0';
            gradientOffset = 100;
            break;
        case calculate_quadrant_js_1.TOP:
            bgHeight = elHeight;
            bgPos1 = "0 " + bgHeight + "px";
            bgPos2 = '0 0';
            gradientOffset = 100;
            break;
        case calculate_quadrant_js_1.TOP_RIGHT:
            derivedAngle = 90 - angle;
            bgHeight = calculate_background_height_js_1.calculateBackgroundHeight(derivedAngle, elHeight, elWidth);
            gradientOffset = calculate_gradient_offset_js_1.calculateGradientOffset(derivedAngle, elWidth, bgHeight);
            bgPos1 = "0 " + elHeight + "px";
            bgPos2 = "0 100%";
            break;
        case calculate_quadrant_js_1.BOTTOM_RIGHT:
            derivedAngle = angle - 90;
            bgHeight = calculate_background_height_js_1.calculateBackgroundHeight(derivedAngle, elHeight, elWidth);
            gradientOffset = calculate_gradient_offset_js_1.calculateGradientOffset(derivedAngle, elWidth, bgHeight);
            bgPos1 = "0 " + -bgHeight + "px";
            bgPos2 = '0 0';
            break;
        case calculate_quadrant_js_1.BOTTOM_LEFT:
            derivedAngle = 270 - angle;
            bgHeight = calculate_background_height_js_1.calculateBackgroundHeight(derivedAngle, elHeight, elWidth);
            gradientOffset = calculate_gradient_offset_js_1.calculateGradientOffset(derivedAngle, elWidth, bgHeight);
            bgPos1 = "0 " + -bgHeight + "px";
            bgPos2 = '0 0';
            break;
        case calculate_quadrant_js_1.TOP_LEFT:
            derivedAngle = angle - 270;
            bgHeight = calculate_background_height_js_1.calculateBackgroundHeight(derivedAngle, elHeight, elWidth);
            gradientOffset = calculate_gradient_offset_js_1.calculateGradientOffset(derivedAngle, elWidth, bgHeight);
            bgPos1 = "0 " + elHeight + "px";
            bgPos2 = '0 100%';
            break;
    }
    return {
        bgPos1: bgPos1,
        bgPos2: bgPos2,
        bgHeight: bgHeight,
        gradientOffset: gradientOffset,
    };
}
exports.calculate = calculate;
