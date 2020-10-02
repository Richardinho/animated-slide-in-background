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
        var width = 35;
        var height = 57;
        var angle = 89;
        var result = calculateBackgroundHeight(angle, height, width);
        expect(result).toBeCloseTo(57.6109);
    });
});
