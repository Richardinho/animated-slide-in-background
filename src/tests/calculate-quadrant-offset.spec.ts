import {
  RIGHT,
  BOTTOM,
  LEFT,
  TOP,
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  calculateQuadrant
} from "../calculate-quadrant.js";

describe('calculateQuadrant()', () => {
  test('should return quadrant constant for angle', () => {
    expect(calculateQuadrant(0)).toBe(TOP);
    expect(calculateQuadrant(12)).toBe(TOP_RIGHT);
    expect(calculateQuadrant(90)).toBe(RIGHT);
    expect(calculateQuadrant(91)).toBe(BOTTOM_RIGHT);
    expect(calculateQuadrant(179)).toBe(BOTTOM_RIGHT);
    expect(calculateQuadrant(180)).toBe(BOTTOM);
    expect(calculateQuadrant(181)).toBe(BOTTOM_LEFT);
    expect(calculateQuadrant(269)).toBe(BOTTOM_LEFT);
    expect(calculateQuadrant(270)).toBe(LEFT);
    expect(calculateQuadrant(271)).toBe(TOP_LEFT);
    expect(calculateQuadrant(359)).toBe(TOP_LEFT);
    expect(calculateQuadrant(360)).toBe(TOP);
  });
});
