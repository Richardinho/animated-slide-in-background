# Animated Slide In Background
Adds a sliding background effect to HTML elements.

When the user hovers over an element with this effect activated, a transition effect occurs where the first color slides out and
is replaced by the second color.

The effect can be configured with different colors, to slide in at different angles, and allows lifecyle methods to hook into 
different stages of the animation process.

There's a demo [here](https://stackblitz.com/edit/animated-slide-in-background-demo?file=index.js) on Stackblitz.

## Installation
Install by pulling from NPM or by getting from CDN
### NPM
```
  npm i animated-slide-in-background

```
### CDN
```
  <script src="https://unpkg.com/animated-slide-in-background@1.0.8/dist/main.js" integrity="" crossorigin="anonymous"></script>

```

## Usage

The background effect can be bound to an element both with data attributes, and manually by instantiating the
`AnimatedSlideInBackground` class.

### Configure using HTML attributes
Add data attributes to configure an element and then call `autoBindElements()` to bind background effect to element.

```html
  <div
    data-asb
    data-asb-color="dodgerblue"
    data-asb-angle="350"
    class="my-element"></div>

```

```
autoBindElements();
```

### Configure using Javascript
Manually calling the `AnimatedSlideInBackground` class is another way of activating the
effect, but also allows the addition of lifecyle handlers.

```html
  <div id="my-element"></div>
```

```js
  const el = document.getElementById('my-element');

  function afterEnter() {
    el.classList.add('is-visible');
  }

  function afterLeave() {
    el.classList.remove('is-visible');
  }

  function beforeEnter() {
    console.log('before enter');
  }

  function beforeLeave() {
    el.classList.remove('is-visible');
  }

  const slider = new AnimatedSlideInBackground(el, {
    angle: 60,
    color: 'hotpink',
    beforeEnter,
    beforeLeave,
    afterEnter,
    afterLeave,
  });


  slider.init();
```

