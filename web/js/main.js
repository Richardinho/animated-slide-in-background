// have to specifically add .js suffix
import { calculate } from './calculate.js';
var fooEls = document.querySelectorAll('[data-foo]');
var containerEl = document.getElementById('container');
fooEls.forEach(function (fooEl) {
    var elHeight = fooEl.offsetHeight;
    var elWidth = fooEl.offsetWidth;
    var elBgColor = window.getComputedStyle(fooEl).backgroundColor;
    var _a = fooEl.dataset, _b = _a.fooAngle, fooAngle = _b === void 0 ? '45' : _b, _c = _a.fooColor, color = _c === void 0 ? 'red' : _c;
    var angle = parseInt(fooAngle, 10);
    var _d = calculate(angle, elWidth, elHeight), bgHeight = _d.bgHeight, gradientOffset = _d.gradientOffset, bgPos1 = _d.bgPos1, bgPos2 = _d.bgPos2;
    fooEl.style.setProperty('background-image', "linear-gradient(" + angle + "deg, " + color + " " + gradientOffset + "%, transparent 0)");
    fooEl.style.setProperty('background-size', "100% " + bgHeight / elHeight * 100 + "%");
    fooEl.style.setProperty('background-position', bgPos1);
    fooEl.addEventListener('mouseenter', function () {
        fooEl.style.setProperty('background-position', bgPos2);
    });
    fooEl.addEventListener('mouseleave', function () {
        fooEl.style.setProperty('background-position', bgPos1);
    });
    fooEl.style.setProperty('background-repeat', 'no-repeat');
    fooEl.style.setProperty('transition', 'all linear 0.4s');
});
