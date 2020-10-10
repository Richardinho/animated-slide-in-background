// have to specifically add .js suffix
import { calculate } from './calculate.js';
export const autoBindElements = () => {
    if (typeof document !== 'undefined') {
        const els = document.querySelectorAll('[data-asb]');
        els.forEach((el) => {
            const { asbAngle, asbColor } = el.dataset;
            const config = {};
            if (asbColor) {
                config.color = asbColor;
            }
            if (asbAngle) {
                config.angle = parseInt(asbAngle, 10);
            }
            new AnimatedSlideInBackground(el, config).init();
        });
    }
};
const defaults = {
    color: 'black',
    angle: 45,
    beforeEnter: () => { },
    beforeLeave: () => { },
    afterEnter: () => { },
    afterLeave: () => { },
};
export class AnimatedSlideInBackground {
    constructor(el, config) {
        this.el = el;
        this.config = { ...defaults, ...config };
    }
    init() {
        const elHeight = this.el.offsetHeight;
        const elWidth = this.el.offsetWidth;
        const elBgColor = window.getComputedStyle(this.el).backgroundColor;
        const { bgHeight, gradientOffset, bgPos1, bgPos2 } = calculate(this.config.angle, elWidth, elHeight);
        this.el.style.setProperty('background-image', `linear-gradient(${this.config.angle}deg, ${this.config.color} ${gradientOffset}%, transparent 0)`);
        this.el.style.setProperty('background-size', `100% ${bgHeight / elHeight * 100}%`);
        this.el.style.setProperty('background-position', bgPos1);
        this.el.addEventListener('mouseenter', () => {
            this.config.beforeEnter.apply(null);
            this.el.addEventListener('transitionend', () => {
                this.config.afterEnter.apply(null);
            }, { once: true });
            this.el.style.setProperty('background-position', bgPos2);
        });
        this.el.addEventListener('mouseleave', () => {
            this.config.beforeLeave.apply(null);
            this.el.addEventListener('transitionend', () => {
                this.config.afterLeave.apply(null);
            }, { once: true });
            this.el.style.setProperty('background-position', bgPos1);
        });
        this.el.style.setProperty('background-repeat', 'no-repeat');
        this.el.style.setProperty('transition', 'all linear 0.4s');
    }
}
