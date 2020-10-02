// have to specifically add .js suffix
import { calculateBackgroundHeight } from './calculate-background-height.js';
var width = 100;
var height = 100;
var angle = 45;
var result = calculateBackgroundHeight(angle, height, width);
console.log('Great result is:', result);
