# Foo Sliding Background
Adds a sliding background effect to HTML elements.

## Installation
Install by pulling from NPM or by downloading from CDN
### CDN
```
  <script src="cdn.blahblah.js" integrity="dfdfdfd" crossorigin="anonymous"></script>

```
### NPM
```
  npm i foo-sliding-background

```

## Usage

### Configure using HTML attributes

The simplest way to apply this effect to an element is to add data attributes
which configure the effect for that element. Does not support hooks.
Only works for elements on page when script runs. For dynamically added elements, you need to initialise and configure using Javascript

```

  <div 
    data-foo
    data-foo-color="moccasin"
    data-foo-angle="120"
  </div>

```

### Configure using Javascript

Shows all possible config properties. Note that it wouldn't make sense
to have some of these properties present at the same time.e.g. angle and auto

```
  new FooSlidingBackground(el, {
    angle: 34,
    color: 'red',
    auto: true,  // angle will be ignore if true
    afterEnter: (el, config) => {
      // do something after transition completes
    },
    afterLeave: (el, config) => {
      //  do something after transition completers
    },
  });

```

### Custom constructor
You can create your own constructor for creating objects with custom defaults.

```
const CustomConstructor = FooSlidingBackground.createCustomConstructor({
  color: 'blue',
  afterEnter: () => {},
});

const customSlider = new CustomConstructor(el, {
  color: 'red', // can override custom properties here
});
```

How to pull in the imported files?
```
java -jar closure-compiler-v20200927.jar --js main.js --js_output_file main-compiled.js
```

```
java -jar closure-compiler-v20200927.jar --js_output_file=out.js 'web/js/**.js'
```
