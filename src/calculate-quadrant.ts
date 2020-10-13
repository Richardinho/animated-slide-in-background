export const TOP_RIGHT = "top-right";
export const BOTTOM_RIGHT = "bottom-right";
export const BOTTOM_LEFT = "bottom-left";
export const TOP_LEFT = "top-left";
export const TOP = "top";
export const RIGHT = "right";
export const LEFT = "left";
export const BOTTOM = "bottom";

export function calculateQuadrant(angle: number) {
  if (angle < 0) {
    throw new Error("angle must not be less than 0");
  } else if (angle > 360) {
    throw new Error("angle must not be greater than or equal to 360");
  } else if (angle === 0 || angle === 360) {
    return TOP;
  } else if (angle === 90) {
    return RIGHT;
  } else if (angle === 180) {
    return BOTTOM;
  } else if (angle === 270) {
    return LEFT;
  } else if (angle > 0 && angle < 90) {
    return TOP_RIGHT;
  } else if (angle > 90 && angle < 180) {
    return BOTTOM_RIGHT;
  } else if (angle > 180 && angle < 270) {
    return BOTTOM_LEFT;
  } else if (angle > 270) {
    return TOP_LEFT;
  }
}

