/*!
 *  Clarity.js Copyright 2015 Jakub Szczepaniak
 * Implementation of jQuery based on W3C specification,
 * regardless of implementation status in browsers.
 */
/* globals define, module, performance */
(function(Window, Document, factory) {

    'use strict';

    var theModule = factory(Document);

    if (typeof define === 'function' && define.amd) {
      define(theModule);
    } else if ('undefined' !== typeof module && module.exports) {
      module.exports = theModule;
    } else {
      Window.$ = Window.Clarity = theModule;
    }

  }(window, document, function(document) { /* jshint ignore:line */
      'use strict';
