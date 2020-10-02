import { calculateGradientOffset } from '../calculate-gradient-offset';
describe('calculateGradientOffset()', function () {
    fit('should...', function () {
        var angle = 30;
        var elWidth = 100;
        var bgHeight = 200;
        var result = calculateGradientOffset(angle, elWidth, bgHeight);
        expect(result).toBeCloseTo(2323);
    });
});
