/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) {(typeof exports === 'object' ? exports : root)[i] = a[i];console.log(i)}
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calculate-background-height.ts":
/*!********************************************!*\
  !*** ./src/calculate-background-height.ts ***!
  \********************************************/
/*! namespace exports */
/*! export calculateBackgroundHeight [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateBackgroundHeight\": () => /* binding */ calculateBackgroundHeight\n/* harmony export */ });\nfunction toRad(degrees) {\n    return degrees * (Math.PI / 180);\n}\n/*\n *  take angle in degrees, height and width in pixels\n *  and return height of background in pixels\n */\nfunction calculateBackgroundHeight(angle, height, width) {\n    return width / Math.tan(toRad(angle)) + height;\n}\n\n\n//# sourceURL=webpack://animated-slide-in-background/./src/calculate-background-height.ts?");

/***/ }),

/***/ "./src/calculate-gradient-offset.ts":
/*!******************************************!*\
  !*** ./src/calculate-gradient-offset.ts ***!
  \******************************************/
/*! namespace exports */
/*! export calculateGradientOffset [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateGradientOffset\": () => /* binding */ calculateGradientOffset\n/* harmony export */ });\nfunction toRad(degrees) {\n    return degrees * (Math.PI / 180);\n}\nfunction calculateGradientOffset(angle, elWidth, bgHeight) {\n    var ang = 90 - angle;\n    var remainder = elWidth * Math.sin(toRad(ang));\n    var offset = bgHeight * Math.cos(toRad(ang));\n    var gradLength = remainder + offset;\n    return (offset / gradLength) * 100;\n}\n\n\n//# sourceURL=webpack://animated-slide-in-background/./src/calculate-gradient-offset.ts?");

/***/ }),

/***/ "./src/calculate-quadrant.ts":
/*!***********************************!*\
  !*** ./src/calculate-quadrant.ts ***!
  \***********************************/
/*! namespace exports */
/*! export BOTTOM [provided] [no usage info] [missing usage info prevents renaming] */
/*! export BOTTOM_LEFT [provided] [no usage info] [missing usage info prevents renaming] */
/*! export BOTTOM_RIGHT [provided] [no usage info] [missing usage info prevents renaming] */
/*! export LEFT [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RIGHT [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TOP [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TOP_LEFT [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TOP_RIGHT [provided] [no usage info] [missing usage info prevents renaming] */
/*! export calculateQuadrant [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TOP_RIGHT\": () => /* binding */ TOP_RIGHT,\n/* harmony export */   \"BOTTOM_RIGHT\": () => /* binding */ BOTTOM_RIGHT,\n/* harmony export */   \"BOTTOM_LEFT\": () => /* binding */ BOTTOM_LEFT,\n/* harmony export */   \"TOP_LEFT\": () => /* binding */ TOP_LEFT,\n/* harmony export */   \"TOP\": () => /* binding */ TOP,\n/* harmony export */   \"RIGHT\": () => /* binding */ RIGHT,\n/* harmony export */   \"LEFT\": () => /* binding */ LEFT,\n/* harmony export */   \"BOTTOM\": () => /* binding */ BOTTOM,\n/* harmony export */   \"calculateQuadrant\": () => /* binding */ calculateQuadrant\n/* harmony export */ });\nvar TOP_RIGHT = \"top-right\";\nvar BOTTOM_RIGHT = \"bottom-right\";\nvar BOTTOM_LEFT = \"bottom-left\";\nvar TOP_LEFT = \"top-left\";\nvar TOP = \"top\";\nvar RIGHT = \"right\";\nvar LEFT = \"left\";\nvar BOTTOM = \"bottom\";\nfunction calculateQuadrant(angle) {\n    if (angle < 0) {\n        throw new Error(\"angle must not be less than 0\");\n    }\n    else if (angle > 360) {\n        throw new Error(\"angle must not be greater than or equal to 360\");\n    }\n    if (angle === 0 || angle === 360) {\n        return TOP;\n    }\n    else if (angle === 90) {\n        return RIGHT;\n    }\n    else if (angle === 180) {\n        return BOTTOM;\n    }\n    else if (angle === 270) {\n        return LEFT;\n    }\n    else if (angle > 0 && angle < 90) {\n        return TOP_RIGHT;\n    }\n    else if (angle > 90 && angle < 180) {\n        return BOTTOM_RIGHT;\n    }\n    else if (angle > 180 && angle < 270) {\n        return BOTTOM_LEFT;\n    }\n    else if (angle > 270) {\n        return TOP_LEFT;\n    }\n}\n\n\n//# sourceURL=webpack://animated-slide-in-background/./src/calculate-quadrant.ts?");

/***/ }),

/***/ "./src/calculate.ts":
/*!**************************!*\
  !*** ./src/calculate.ts ***!
  \**************************/
/*! namespace exports */
/*! export calculate [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculate\": () => /* binding */ calculate\n/* harmony export */ });\n/* harmony import */ var _calculate_quadrant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate-quadrant */ \"./src/calculate-quadrant.ts\");\n/* harmony import */ var _calculate_background_height__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate-background-height */ \"./src/calculate-background-height.ts\");\n/* harmony import */ var _calculate_gradient_offset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculate-gradient-offset */ \"./src/calculate-gradient-offset.ts\");\n\n\n\nfunction calculate(angle, elWidth, elHeight) {\n    var quadrant = (0,_calculate_quadrant__WEBPACK_IMPORTED_MODULE_0__.calculateQuadrant)(angle);\n    var bgHeight = 0;\n    var gradientOffset = 0;\n    var bgPos1 = '';\n    var bgPos2 = '';\n    var derivedAngle = 0;\n    switch (quadrant) {\n        case _calculate_quadrant__WEBPACK_IMPORTED_MODULE_0__.RIGHT:\n            bgHeight = elHeight;\n            bgPos1 = \"-\" + elWidth + \" 0\";\n            bgPos2 = '0 0';\n            gradientOffset = 100;\n            break;\n        case _calculate_quadrant__WEBPACK_IMPORTED_MODULE_0__.BOTTOM:\n            bgHeight = elHeight;\n            bgPos1 = \"0 \" + -bgHeight + \"px\";\n            bgPos2 = '0 0';\n            gradientOffset = 100;\n            break;\n        case _calculate_quadrant__WEBPACK_IMPORTED_MODULE_0__.LEFT:\n            bgHeight = elHeight;\n            bgPos1 = elWidth + \" 0\";\n            bgPos2 = '0 0';\n            gradientOffset = 100;\n            break;\n        case _calculate_quadrant__WEBPACK_IMPORTED_MODULE_0__.TOP:\n            bgHeight = elHeight;\n            bgPos1 = \"0 \" + bgHeight + \"px\";\n            bgPos2 = '0 0';\n            gradientOffset = 100;\n            break;\n        case _calculate_quadrant__WEBPACK_IMPORTED_MODULE_0__.TOP_RIGHT:\n            derivedAngle = 90 - angle;\n            bgHeight = (0,_calculate_background_height__WEBPACK_IMPORTED_MODULE_1__.calculateBackgroundHeight)(derivedAngle, elHeight, elWidth);\n            gradientOffset = (0,_calculate_gradient_offset__WEBPACK_IMPORTED_MODULE_2__.calculateGradientOffset)(derivedAngle, elWidth, bgHeight);\n            bgPos1 = \"0 \" + elHeight + \"px\";\n            bgPos2 = \"0 100%\";\n            break;\n        case _calculate_quadrant__WEBPACK_IMPORTED_MODULE_0__.BOTTOM_RIGHT:\n            derivedAngle = angle - 90;\n            bgHeight = (0,_calculate_background_height__WEBPACK_IMPORTED_MODULE_1__.calculateBackgroundHeight)(derivedAngle, elHeight, elWidth);\n            gradientOffset = (0,_calculate_gradient_offset__WEBPACK_IMPORTED_MODULE_2__.calculateGradientOffset)(derivedAngle, elWidth, bgHeight);\n            bgPos1 = \"0 \" + -bgHeight + \"px\";\n            bgPos2 = '0 0';\n            break;\n        case _calculate_quadrant__WEBPACK_IMPORTED_MODULE_0__.BOTTOM_LEFT:\n            derivedAngle = 270 - angle;\n            bgHeight = (0,_calculate_background_height__WEBPACK_IMPORTED_MODULE_1__.calculateBackgroundHeight)(derivedAngle, elHeight, elWidth);\n            gradientOffset = (0,_calculate_gradient_offset__WEBPACK_IMPORTED_MODULE_2__.calculateGradientOffset)(derivedAngle, elWidth, bgHeight);\n            bgPos1 = \"0 \" + -bgHeight + \"px\";\n            bgPos2 = '0 0';\n            break;\n        case _calculate_quadrant__WEBPACK_IMPORTED_MODULE_0__.TOP_LEFT:\n            derivedAngle = angle - 270;\n            bgHeight = (0,_calculate_background_height__WEBPACK_IMPORTED_MODULE_1__.calculateBackgroundHeight)(derivedAngle, elHeight, elWidth);\n            gradientOffset = (0,_calculate_gradient_offset__WEBPACK_IMPORTED_MODULE_2__.calculateGradientOffset)(derivedAngle, elWidth, bgHeight);\n            bgPos1 = \"0 \" + elHeight + \"px\";\n            bgPos2 = '0 100%';\n            break;\n    }\n    return {\n        bgPos1: bgPos1,\n        bgPos2: bgPos2,\n        bgHeight: bgHeight,\n        gradientOffset: gradientOffset,\n    };\n}\n\n\n//# sourceURL=webpack://animated-slide-in-background/./src/calculate.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! namespace exports */
/*! export AnimatedSlideInBackground [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export autoBindElements [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autoBindElements\": () => /* binding */ autoBindElements,\n/* harmony export */   \"AnimatedSlideInBackground\": () => /* binding */ AnimatedSlideInBackground\n/* harmony export */ });\n/* harmony import */ var _calculate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate */ \"./src/calculate.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n// have to specifically add .js suffix\n\nvar autoBindElements = function () {\n    if (typeof document !== 'undefined') {\n        var els = document.querySelectorAll('[data-asb]');\n        els.forEach(function (el) {\n            var _a = el.dataset, asbAngle = _a.asbAngle, asbColor = _a.asbColor;\n            var config = {};\n            if (asbColor) {\n                config.color = asbColor;\n            }\n            if (asbAngle) {\n                config.angle = parseInt(asbAngle, 10);\n            }\n            new AnimatedSlideInBackground(el, config).init();\n        });\n    }\n};\nvar defaults = {\n    color: 'black',\n    angle: 45,\n    beforeEnter: function () { },\n    beforeLeave: function () { },\n    afterEnter: function () { },\n    afterLeave: function () { },\n};\nvar AnimatedSlideInBackground = /** @class */ (function () {\n    function AnimatedSlideInBackground(el, config) {\n        this.el = el;\n        this.config = __assign(__assign({}, defaults), config);\n    }\n    AnimatedSlideInBackground.prototype.init = function () {\n        var _this = this;\n        var elHeight = this.el.offsetHeight;\n        var elWidth = this.el.offsetWidth;\n        var elBgColor = window.getComputedStyle(this.el).backgroundColor;\n        var _a = (0,_calculate__WEBPACK_IMPORTED_MODULE_0__.calculate)(this.config.angle, elWidth, elHeight), bgHeight = _a.bgHeight, gradientOffset = _a.gradientOffset, bgPos1 = _a.bgPos1, bgPos2 = _a.bgPos2;\n        this.el.style.setProperty('background-image', \"linear-gradient(\" + this.config.angle + \"deg, \" + this.config.color + \" \" + gradientOffset + \"%, transparent 0)\");\n        this.el.style.setProperty('background-size', \"100% \" + bgHeight / elHeight * 100 + \"%\");\n        this.el.style.setProperty('background-position', bgPos1);\n        this.el.addEventListener('mouseenter', function () {\n            _this.config.beforeEnter.apply(null);\n            _this.el.addEventListener('transitionend', function () {\n                _this.config.afterEnter.apply(null);\n            }, { once: true });\n            _this.el.style.setProperty('background-position', bgPos2);\n        });\n        this.el.addEventListener('mouseleave', function () {\n            _this.config.beforeLeave.apply(null);\n            _this.el.addEventListener('transitionend', function () {\n                _this.config.afterLeave.apply(null);\n            }, { once: true });\n            _this.el.style.setProperty('background-position', bgPos1);\n        });\n        this.el.style.setProperty('background-repeat', 'no-repeat');\n        this.el.style.setProperty('transition', 'all linear 0.4s');\n    };\n    return AnimatedSlideInBackground;\n}());\n\nvar foo = 'this is foo';\nconsole.log(foo);\n\n\n//# sourceURL=webpack://animated-slide-in-background/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/main.ts");
/******/ })()
;
});
