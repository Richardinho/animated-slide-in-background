"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculate_gradient_offset_1 = require("../calculate-gradient-offset");
describe('calculateGradientOffset()', function () {
    it('should calculate gradient offset', function () {
        var angle = 30;
        var elWidth = 100;
        var bgHeight = 200;
        var result = calculate_gradient_offset_1.calculateGradientOffset(angle, elWidth, bgHeight);
        expect(result).toBeCloseTo(53.58985);
    });
});
