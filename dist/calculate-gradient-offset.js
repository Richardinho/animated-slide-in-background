function toRad(degrees) {
    return degrees * (Math.PI / 180);
}
export function calculateGradientOffset(angle, elWidth, bgHeight) {
    const ang = 90 - angle;
    const remainder = elWidth * Math.sin(toRad(ang));
    const offset = bgHeight * Math.cos(toRad(ang));
    const gradLength = remainder + offset;
    return (offset / gradLength) * 100;
}
