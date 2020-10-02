"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateQuadrant = exports.BOTTOM = exports.LEFT = exports.RIGHT = exports.TOP = exports.TOP_LEFT = exports.BOTTOM_LEFT = exports.BOTTOM_RIGHT = exports.TOP_RIGHT = void 0;
exports.TOP_RIGHT = "top-right";
exports.BOTTOM_RIGHT = "bottom-right";
exports.BOTTOM_LEFT = "bottom-left";
exports.TOP_LEFT = "top-left";
exports.TOP = "top";
exports.RIGHT = "right";
exports.LEFT = "left";
exports.BOTTOM = "bottom";
function calculateQuadrant(angle) {
    if (angle < 0) {
        throw new Error("angle must not be less than 0");
    }
    else if (angle > 360) {
        throw new Error("angle must not be greater than or equal to 360");
    }
    if (angle === 0 || angle === 360) {
        return exports.TOP;
    }
    else if (angle === 90) {
        console.log('right');
        return exports.RIGHT;
    }
    else if (angle === 180) {
        return exports.BOTTOM;
    }
    else if (angle === 270) {
        return exports.LEFT;
    }
    else if (angle > 0 && angle < 90) {
        return exports.TOP_RIGHT;
    }
    else if (angle > 90 && angle < 180) {
        return exports.BOTTOM_RIGHT;
    }
    else if (angle > 180 && angle < 270) {
        return exports.BOTTOM_LEFT;
    }
    else if (angle > 270) {
        return exports.TOP_LEFT;
    }
}
exports.calculateQuadrant = calculateQuadrant;
