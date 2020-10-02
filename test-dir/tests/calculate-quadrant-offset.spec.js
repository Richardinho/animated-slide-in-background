"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculate_quadrant_js_1 = require("../calculate-quadrant.js");
describe('calculateQuadrant()', function () {
    test('should return quadrant constant for angle', function () {
        expect(calculate_quadrant_js_1.calculateQuadrant(0)).toBe(calculate_quadrant_js_1.TOP);
        expect(calculate_quadrant_js_1.calculateQuadrant(12)).toBe(calculate_quadrant_js_1.TOP_RIGHT);
        expect(calculate_quadrant_js_1.calculateQuadrant(90)).toBe(calculate_quadrant_js_1.RIGHT);
        expect(calculate_quadrant_js_1.calculateQuadrant(91)).toBe(calculate_quadrant_js_1.BOTTOM_RIGHT);
        expect(calculate_quadrant_js_1.calculateQuadrant(179)).toBe(calculate_quadrant_js_1.BOTTOM_RIGHT);
        expect(calculate_quadrant_js_1.calculateQuadrant(180)).toBe(calculate_quadrant_js_1.BOTTOM);
        expect(calculate_quadrant_js_1.calculateQuadrant(181)).toBe(calculate_quadrant_js_1.BOTTOM_LEFT);
        expect(calculate_quadrant_js_1.calculateQuadrant(269)).toBe(calculate_quadrant_js_1.BOTTOM_LEFT);
        expect(calculate_quadrant_js_1.calculateQuadrant(270)).toBe(calculate_quadrant_js_1.LEFT);
        expect(calculate_quadrant_js_1.calculateQuadrant(271)).toBe(calculate_quadrant_js_1.TOP_LEFT);
        expect(calculate_quadrant_js_1.calculateQuadrant(359)).toBe(calculate_quadrant_js_1.TOP_LEFT);
        expect(calculate_quadrant_js_1.calculateQuadrant(360)).toBe(calculate_quadrant_js_1.TOP);
    });
    test('should throw error if angle is greater than 360', function () {
        expect(calculate_quadrant_js_1.calculateQuadrant(361)).toThrow(Error);
    });
});
