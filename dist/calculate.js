import { RIGHT, BOTTOM, LEFT, TOP, TOP_RIGHT, TOP_LEFT, BOTTOM_RIGHT, BOTTOM_LEFT, calculateQuadrant } from "./calculate-quadrant.js";
import { calculateBackgroundHeight } from './calculate-background-height.js';
import { calculateGradientOffset } from './calculate-gradient-offset.js';
export function calculate(angle, elWidth, elHeight) {
    const quadrant = calculateQuadrant(angle);
    let bgHeight = 0;
    let gradientOffset = 0;
    let bgPos1 = '';
    let bgPos2 = '';
    let derivedAngle = 0;
    switch (quadrant) {
        case RIGHT:
            bgHeight = elHeight;
            bgPos1 = `-${elWidth} 0`;
            bgPos2 = '0 0';
            gradientOffset = 100;
            break;
        case BOTTOM:
            bgHeight = elHeight;
            bgPos1 = `0 ${-bgHeight}px`;
            bgPos2 = '0 0';
            gradientOffset = 100;
            break;
        case LEFT:
            bgHeight = elHeight;
            bgPos1 = `${elWidth} 0`;
            bgPos2 = '0 0';
            gradientOffset = 100;
            break;
        case TOP:
            bgHeight = elHeight;
            bgPos1 = `0 ${bgHeight}px`;
            bgPos2 = '0 0';
            gradientOffset = 100;
            break;
        case TOP_RIGHT:
            derivedAngle = 90 - angle;
            bgHeight = calculateBackgroundHeight(derivedAngle, elHeight, elWidth);
            gradientOffset = calculateGradientOffset(derivedAngle, elWidth, bgHeight);
            bgPos1 = `0 ${elHeight}px`;
            bgPos2 = `0 100%`;
            break;
        case BOTTOM_RIGHT:
            derivedAngle = angle - 90;
            bgHeight = calculateBackgroundHeight(derivedAngle, elHeight, elWidth);
            gradientOffset = calculateGradientOffset(derivedAngle, elWidth, bgHeight);
            bgPos1 = `0 ${-bgHeight}px`;
            bgPos2 = '0 0';
            break;
        case BOTTOM_LEFT:
            derivedAngle = 270 - angle;
            bgHeight = calculateBackgroundHeight(derivedAngle, elHeight, elWidth);
            gradientOffset = calculateGradientOffset(derivedAngle, elWidth, bgHeight);
            bgPos1 = `0 ${-bgHeight}px`;
            bgPos2 = '0 0';
            break;
        case TOP_LEFT:
            derivedAngle = angle - 270;
            bgHeight = calculateBackgroundHeight(derivedAngle, elHeight, elWidth);
            gradientOffset = calculateGradientOffset(derivedAngle, elWidth, bgHeight);
            bgPos1 = `0 ${elHeight}px`;
            bgPos2 = '0 100%';
            break;
    }
    return {
        bgPos1,
        bgPos2,
        bgHeight,
        gradientOffset,
    };
}
