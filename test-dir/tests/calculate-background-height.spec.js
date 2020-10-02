"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculate_background_height_1 = require("../calculate-background-height");
describe('calculateBackgroundHeight()', function () {
    it('should calculate background height', function () {
        var width = 100;
        var height = 100;
        var angle = 45;
        var result = calculate_background_height_1.calculateBackgroundHeight(angle, height, width);
        expect(result).toBeCloseTo(200);
    });
    it('should calculate background height', function () {
        var width = 35;
        var height = 57;
        var angle = 89;
        var result = calculate_background_height_1.calculateBackgroundHeight(angle, height, width);
        expect(result).toBeCloseTo(57.6109);
    });
});
