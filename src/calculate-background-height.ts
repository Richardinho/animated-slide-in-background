function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/*
 *  take angle in degrees, height and width in pixels
 *  and return height of background in pixels
 */

export function calculateBackgroundHeight(
  angle: number,
  height: number,
  width: number) {
  return width / Math.tan(toRad(angle)) + height;
}

