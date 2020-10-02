function toRad(degrees) {
    return degrees * (Math.PI / 180);
}
/*
 *  take angle in degrees, height and width in pixels
 *  and return height of background in pixels
 */
export function calculateBackgroundHeight(angle, height, width) {
    return (width / Math.tan(toRad(90 - angle))) + height;
}
