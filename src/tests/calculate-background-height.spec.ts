import {calculateBackgroundHeight} from '../calculate-background-height';

describe('calculateBackgroundHeight()', () => {
  it('should calculate background height', () => {
    const width: number = 100;
    const height: number = 100;
    const angle: number = 45;

    const result = calculateBackgroundHeight(angle, height, width);

    expect(result).toBeCloseTo(200);
  });

  it('should calculate background height', () => {
    const width: number = 35;
    const height: number = 57;
    const angle: number = 89;

    const result = calculateBackgroundHeight(angle, height, width);

    expect(result).toBeCloseTo(57.6109);
  });
});
