## Clarity.js
Implementation of jQuery based on W3C specification, regardless of DOM implementation status in browsers.

## Warning
This is _not_ production code.

It is simply an attempt to write Javascript code as I would write it if all browsers had implemented full W3C specification.

Many of the methods are still bugged. Lots of code could be optimized and/or reduced, while keeping it simple and readable.

## API
Many of the jQuery original methods have been already implemented. Some of them don't support yet all possible arguments. Some of methods will not be implemented, as I believe they are no longer usable, or do not belong to DOM abstraction library.

## Documentation
All code was automatically documented using `smartcomments`. Most of the code still requires commenting, which I will try to do in free time. Use following command to generate basic documentation. `jsdoc -d ./docs/ build/clarity.js`

## Build
Run `tools/build.js`. Build can be customized in `build.config.js`.

In my free time I hope to utilize gulp or similar tool to simplify development, but for now this must suffice.

## Tests
Some test have been written in a single file. As time allows, tests for all code will be written in separate files.
