// have to specifically add .js suffix
import {calculate} from './calculate.js';

const fooEls: Array<HTMLElement> = <Array<HTMLElement>><any>document.querySelectorAll('[data-foo]');
const containerEl = document.getElementById('container');

fooEls.forEach((fooEl: HTMLElement) => {

  const elHeight = fooEl.offsetHeight;
  const elWidth = fooEl.offsetWidth;
  const elBgColor = window.getComputedStyle(fooEl).backgroundColor;

  const {fooAngle = '45', fooColor: color = 'red'} = fooEl.dataset;
  const angle = parseInt(fooAngle, 10);

  const {bgHeight, gradientOffset, bgPos1, bgPos2} = calculate(angle, elWidth, elHeight);

  fooEl.style.setProperty('background-image', `linear-gradient(${angle}deg, ${color} ${gradientOffset}%, transparent 0)`);
  fooEl.style.setProperty('background-size', `100% ${bgHeight / elHeight * 100}%`);

  fooEl.style.setProperty('background-position', bgPos1);

  fooEl.addEventListener('mouseenter', () => {
    fooEl.addEventListener('transitionend', () => {
      console.log('after mouse enter animation');
    }, { once: true });

    fooEl.style.setProperty('background-position', bgPos2);
  });

  console.log('HELLO RICH');
  fooEl.addEventListener('mouseleave', () => {
    fooEl.addEventListener('transitionend', () => {
      console.log('after mouse leave animation');
    }, { once: true });

    fooEl.style.setProperty('background-position', bgPos1);
  });

  fooEl.style.setProperty('background-repeat', 'no-repeat');
  fooEl.style.setProperty('transition', 'all linear 0.4s');

});
