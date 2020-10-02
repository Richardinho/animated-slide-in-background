import {calculateGradientOffset} from '../calculate-gradient-offset';

describe('calculateGradientOffset()', () => {
 
  it('should calculate gradient offset', () => {
    const angle = 30;
    const elWidth = 100;
    const bgHeight = 200;

    const result = calculateGradientOffset(angle, elWidth, bgHeight);
    expect(result).toBeCloseTo(53.58985);
  });
});
