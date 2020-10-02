function toRad(degrees) {
    return degrees * (Math.PI / 180);
}
export function calculateGradientOffset(angle, elWidth, bgHeight) {
    var ang = 90 - angle;
    var remainder = elWidth * Math.sin(toRad(ang));
    var offset = bgHeight * Math.cos(toRad(ang));
    var gradLength = remainder + offset;
    return (offset / gradLength) * 100;
}
