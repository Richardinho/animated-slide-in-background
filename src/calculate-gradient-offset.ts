
function toRad(degrees: number) {
  return degrees * (Math.PI / 180);
}

export function calculateGradientOffset(angle: number, elWidth: number, bgHeight: number): number {

  const ang = 90 - angle;
  const remainder = elWidth * Math.sin(toRad(ang));
  const offset = bgHeight * Math.cos(toRad(ang));
  const gradLength = remainder + offset;

  return (offset / gradLength) * 100;
}
