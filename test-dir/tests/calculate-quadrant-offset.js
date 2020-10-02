"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculate_quadrant_js_1 = require("../calculate-quadrant.js");
describe('calculateQuadrant()', function () {
    it('should return quadrant constant for angle', function () {
        expect(calculate_quadrant_js_1.calculateQuadrant(120)).toBe(calculate_quadrant_js_1.TOP_RIGHT);
    });
});
