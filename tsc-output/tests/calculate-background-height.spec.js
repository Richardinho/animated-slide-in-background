import { calculateBackgroundHeight } from '../calculate-background-height';
/*

  Height = element_height + (element_width / tan(90 - angle));

*/
describe('calculateBackgroundHeight()', function () {
    it('should calculate background height', function () {
        var width = 100;
        var height = 100;
        var angle = 45;
        var result = calculateBackgroundHeight(angle, height, width);
        expect(result).toBeCloseTo(200);
    });
    it('should calculate background height', function () {
        var width = 100;
        var height = 100;
        var angle = 30;
        var result = calculateBackgroundHeight(angle, height, width);
        expect(result).toBeCloseTo(157.735);
    });
    it('should calculate background height in pixels', function () {
        var width = 75;
        var height = 120;
        var angle = 63;
        var result = calculateBackgroundHeight(angle, height, width);
        expect(result).toBeCloseTo(267.1957);
    });
});
