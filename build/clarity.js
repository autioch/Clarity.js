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
/**
 * Assigns properties to first passed object from all other passed objects.
 * @method extend
 * @private
 * @param {Object} objectToExtend Object to which properties will be assigned.
 * @param {...Objects} Objects whose properties will be assigned to objectToExtend.
 * @return objectToExtend
 */
function extend(objectToExtend) {
  var i, prop, mixin,
    mixins = convertArraylikeToArray(arguments, 1),
    length = mixins.length;
  for (i = 0; i < length; i++) {
    mixin = mixins[i];
    for (prop in mixin) {
      objectToExtend[prop] = mixin[prop];
    }
  }
  return objectToExtend;
}
/**
 * Slices passed argument to return an array. Optionally can slice from given index.
 * @method convertArraylikeToArray
 * @param {} arg Argument to be converted.
 * @param {} from Optional index, from which arg should be sliced.
 * @return An array created by slicing arg.
 * @private
 */
function convertArraylikeToArray(arg, from) {
  return Array.prototype.slice.call(arg, from || 0);
}

/**
 * Description
 * @method convertStringToHTML
 * @param {} arg
 * @return CallExpression
 * @private
 */
function convertStringToHTML(arg) {
  var root = document.createElement('div');
  root.innerHTML = arg;
  return convertArraylikeToArray(root.children);
}
/**
 * Description
 * @method elMatches
 * @param {} el
 * @param {} selector
 * @return CallExpression
 * @private
 */
function elMatches(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector); /* jshint ignore:line */
}

/**
 * Description
 * @method elContainsSelector
 * @param {} el
 * @param {} selector
 * @return BinaryExpression
 * @private
 */
function elContainsSelector(el, selector) {
  return el.querySelector(selector) !== null;
}
/**
 * Description
 * @method own
 * @param {} object
 * @param {} callback
 * @return object
 * @private
 */
function own(object, callback) {
  for (var prop in object) {
    object.hasOwnProperty(prop) && callback(object[prop], prop);
  }
  return object;
}

/**
 * Description
 * @method find
 * @param {} list
 * @param {} callback
 * @return UnaryExpression
 * @private
 */
function find(list, callback) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (callback(list[i], i)) {
      return i;
    }
  }
  return -1;
}

/**
 * Description
 * @method each
 * @param {} list
 * @param {} callback
 * @return list
 * @private
 */
function each(list, callback) {
  for (var i = 0, length = list.length; i < length; i++) {
    callback(list[i], i);
  }
  return list;
}
  /**
   * Description
   * @method parse_S_W_E
   * @param {} option_S_W_E
   * @return elements
   * @private
   */
  function parse_S_W_E(option_S_W_E) {
    var elements = [];
    if (isString(option_S_W_E)) {
      elements = convertArraylikeToArray(document.querySelectorAll(option_S_W_E));
    } else if (isWrapper(option_S_W_E)) {
      elements = option_S_W_E.elements;
    } else if (isHTMLElement(option_S_W_E)) {
      elements = [option_S_W_E];
    }
    return elements;
  }
/**
 * Checks if type of passed argument is object.
 * @method isObject
 * @private
 * @param {} arg Argument to be checked.
 * @return True if passed argument it object, false otherwise.
 */
function isObject(arg) {
  return 'object' === typeof arg;
}

/**
 * Checks if passed argument's value is other than "undefined".
 * @method isDefined
 * @private
 * @param {} arg Argument to be checked.
 * @return True if argument is defined, false otherwise.
 */
function isDefined(arg) {
  return arg !== undefined;
}

/**
 * Checks if passed argument is an HTMLElement.
 * @method isHTMLElement
 * @private
 * @param {} arg Argument to be checked.
 * @return True if argument is an HTMLElement, false otherwise.
 */
function isHTMLElement(arg) {
  return arg instanceof HTMLElement;
}

/**
 * Checks if passed argument is string parsable to  html.
 * @method isHTMLString
 * @private
 * @param {} arg Argument to be checked.
 * @return True string represents HTMl, false otherwise.
 */
function isHTMLString(arg) {
  var length = arg.length;
  return length && arg[0] === '<' && arg[length - 1] === '>' && length > 2;
}

/**
 * Checks if type of passed argument is string.
 * @method isString
 * @private
 * @param {} arg Argument to be checked.
 * @return True is passed argument is string, false otherwise.
 */
function isString(arg) {
  return 'string' === typeof arg;
}

/**
 * Checks if passed argument is function.
 * @method isFunction
 * @private
 * @param {} arg Argument to be checked.
 * @return True if passed argument is function, false otherwise.
 */
function isFunction(arg) {
  return 'function' === typeof arg;
}

/**
 * Checks if passed argument is an instance of Wrapper.
 * @method isWrapper
 * @param {} arg Argument to be checked.
 * @return True if passed argument is an instance of Wrapper, false otherwise.
 * @private
 */
function isWrapper(arg) {
  return arg instanceof Wrapper;
}
/**
 * Description
 * @param {} elements
 * @class Wrapper
 */
function Wrapper(elements) {
  this.length = elements.length;
  this.elements = elements;
}
extend(Wrapper.prototype, {  /**
   * Description
   * @function Wrapper.prototype.addClass
   * @param {} option_S
   * @return CallExpression
   */
  addClass: function(option_S) {
    var classNames = option_S.split(' ');
    return this.each(function(element) {
      element.classList.add(classNames);
    });
  },  /**
   * Description
   * @function Wrapper.prototype.hasClass
   * @param {} option_S
   * @return CallExpression
   */
  hasClass: function(option_S) {
    return this.some(function(element) {
      return element.classList.contains(option_S);
    });
  },  /**
   * Description
   * @function Wrapper.prototype.removeClass
   * @param {} option_S
   * @return CallExpression
   */
  removeClass: function(option_S) {
    var classNames = option_S.split(' ');
    return this.each(function(element) {
      element.classList.remove(classNames);
    });
  },  /**
   * Description
   * @function Wrapper.prototype.toggleClass
   * @param {} option_S
   * @param {} condition
   * @return CallExpression
   */
  toggleClass: function(option_S, condition) {
    var i,
      method = isDefined(condition) ? (condition ? 'add' : 'remove') : 'toggle',
      classNames = option_S.split(' '),
      length = classNames.length;
    return this.each(function(element) {
      for (i = 0; i < length; i++) {
        element.classList[method](option_S);
      }
    });
  },  /**
   * Description
   * @function Wrapper.prototype.attr
   * @param {} option_S_O
   * @param {} value
   * @return ConditionalExpression
   */
  attr: function(option_S_O, value) {
    if (isObject(option_S_O)) {
      return this.each(function(element) {
        own(option_S_O, function(value, key) {
          element.setAttribute(key, value);
        });
      });
    }
    if (isDefined(value)) {
      return this.each(function(element) {
        element.setAttribute(option_S_O, value);
      });
    }
    return this.length ? this.elements[0].getAttribute(option_S_O) : null;
  },  /**
   * Description
   * @function Wrapper.prototype.css
   * @param {} option_S_O
   * @param {} value
   * @return ConditionalExpression
   */
  css: function(option_S_O, value) {
    if (isObject(option_S_O)) {
      return this.each(function(element) {
        own(option_S_O, function(value, key) {
          element.style[key] = value;
        });
      });
    }
    if (isDefined(value)) {
      return this.each(function(element) {
        element.style[option_S_O] = value;
      });
    }
    return this.length ? getComputedStyle(this.elements[0], option_S_O) : null;
  },  /**
   * Description
   * @function Wrapper.prototype.prop
   * @param {} option_S_O
   * @param {} value
   * @return ConditionalExpression
   */
  prop: function(option_S_O, value) {
    if (isObject(option_S_O)) {
      return this.each(function(element) {
        own(option_S_O, function(value, key) {
          element[key] = value;
        });
      });
    }
    if (isDefined(value)) {
      return this.each(function(element) {
        element[option_S_O] = value;
      });
    }
    return this.length ? this.elements[0][option_S_O] : null;
  },  /**
   * Description
   * @function Wrapper.prototype.removeAttr
   * @param {} option_S
   * @return CallExpression
   */
  removeAttr: function(option_S) {
    var i,
      attributes = option_S.split(' '),
      length = attributes.length;
    return this.each(function(element) {
      for (i = 0; i < length; i++) {
        element.removeAttribute(attributes[i]);
      }
    });
  },  /**
   * Description
   * @function Wrapper.prototype.val
   * @param {} option_S
   * @return ConditionalExpression
   */
  val: function(option_S) {
    if (isDefined(option_S)) {
      return this.each(function(element) {
        element.value = option_S;
      });
    }
    return this.length ? this.elements[0][option_S] : null;
  },  /**
   * Description
   * @function Wrapper.prototype.offset
   * @return ObjectExpression
   */
  offset: function() {
    if (!this.length) {
      return null;
    }
    var rect = this.elements[0].getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    };
  },  /**
   * Description
   * @function Wrapper.prototype.position
   * @return ConditionalExpression
   */
  position: function() {
    return this.length ? this.elements[0].getBoundingClientRect() : null;
  },  /**
   * Description
   * @function Wrapper.prototype.after
   * @param {} option_S_W_E
   * @return CallExpression
   */
  after: function(option_S_W_E) {
    var elements = new Wrapper(parse_S_W_E(option_S_W_E));
    var lastIndex = this.length - 1;
    var childs, next;
    return this.each(function(element, index) {
      childs = (index === lastIndex) ? elements.elements : elements.clone().elements;
      next = parent.nextSibling;
      if (next) {
        element.parentNode && each(elements.clone().elements, function(child) {
          element.parentNode.insertBefore(child, element);
        });
      } else {
        element.parentNode && each(elements.clone().elements, function(child) {
          element.parentNode.appendChild(child);
        });
      }
    });
  },  /**
   * Description
   * @function Wrapper.prototype.before
   * @param {} option_S_W_E
   * @return CallExpression
   */
  before: function(option_S_W_E) {
    var elements = new Wrapper(parse_S_W_E(option_S_W_E));
    var lastIndex = this.length - 1;
    var childs;
    return this.each(function(element, index) {
      childs = (index === lastIndex) ? elements.elements : elements.clone().elements;
      element.parentNode && each(elements.clone().elements, function(child) {
        element.parentNode.insertBefore(child, element);
      });
    });
  },  /**
   * Description
   * @function Wrapper.prototype.append
   * @param {} option_S_W_E
   * @return CallExpression
   */
  append: function(option_S_W_E) {
    var elements = new Wrapper(parse_S_W_E(option_S_W_E));
    var lastIndex = this.length - 1;
    var childs;
    return this.each(function(element, index) {
      childs = (index === lastIndex) ? elements.elements : elements.clone().elements;
      each(childs, function(child) {
        element.appendChild(child);
      });
    });
  },  /**
   * Description
   * @function Wrapper.prototype.prepend
   * @param {} option_S_W_E
   * @return CallExpression
   */
  prepend: function(option_S_W_E) {
    var elements = new Wrapper(parse_S_W_E(option_S_W_E));
    var lastIndex = this.length - 1;
    var childs, firstChild;
    return this.each(function(element, index) {
      childs = (index === lastIndex) ? elements.elements : elements.clone().elements;
      firstChild = element.parentNode.firstChild;
      if (firstChild) {
        each(childs, function(child) {
          element.parentNode.insertBefore(child, firstChild);
        });
      } else {
        each(childs, function(child) {
          element.appendChild(child);
        });
      }
    });
  },  /**
   * Description
   * @function Wrapper.prototype.replaceWith
   * @param {} option_S
   * @return ThisExpression
   */
  replaceWith: function(option_S) {
    if (isString(option_S)) {
      return this.each(function(element) {
        element.outerHTML = option_S;
      });
    }
    return this;
  },  /**
   * Description
   * @function Wrapper.prototype.insertAfter
   * @param {} option_S_W_E
   * @return ThisExpression
   */
  insertAfter: function(option_S_W_E) {
    var elements = parse_S_W_E(option_S_W_E);
    var lastParent = elements.slice(-1, 1);
    var next;
    var childs;
    each(elements, function(element) {
      next = element.nextSibling;
      childs = this.clone().elements;
      if (next) {
        each(childs, function(child) {
          element.parentNode.insertBefore(child, next);
        });
      } else {
        each(childs, function(child) {
          element.appendChild(child);
        });
      }
    });
    next = lastParent.nextSibling;
    if (next) {
      each(childs, function(child) {
        lastParent.parentNode.insertBefore(child, next);
      });
    } else {
      each(childs, function(child) {
        lastParent.appendChild(child);
      });
    }
    return this;
  },  /**
   * Description
   * @function Wrapper.prototype.insertBefore
   * @param {} option_S_W_E
   * @return ThisExpression
   */
  insertBefore: function(option_S_W_E) {
    var elements = parse_S_W_E(option_S_W_E);
    var lastParent = elements.slice(-1, 1);
    each(elements, function(element) {
      each(this.clone().elements, function(child) {
        element.parentNode.insertBefore(child, element);
      });
    });
    each(this.elements, function(child) {
      lastParent.parentNode.insertBefore(child, lastParent);
    });
    return this;
  },  /**
   * Description
   * @function Wrapper.prototype.appendTo
   * @param {} option_S_W_E
   * @return ThisExpression
   */
  appendTo: function(option_S_W_E) {
    var elements = parse_S_W_E(option_S_W_E);
    var lastParent = elements.slice(-1, 1);
    each(elements, function(parent) {
      each(this.clone().elements, function(child) {
        parent.appendChild(child);
      });
    });
    each(this.elements, function(child) {
      lastParent.appendChild(child);
    });
    return this;
  },  /**
   * Description
   * @function Wrapper.prototype.prependTo
   * @param {} option_S_W_E
   * @return ThisExpression
   */
  prependTo: function(option_S_W_E) {
    var next;
    var elements = parse_S_W_E(option_S_W_E);
    var lastParent = elements.slice(-1, 1);
    var childs;
    each(elements, function(parent) {
      next = parent.nextSibling;
      childs = this.clone().elements;
      if (next) {
        each(childs, function(child) {
          parent.parentNode.insertBefore(child, next);
        });
      } else {
        each(childs, function(child) {
          parent.appendChild(child);
        });
      }
    });
    next = lastParent.nextSibling;
    if (next) {
      each(this.elements, function(child) {
        lastParent.parentNode.insertBefore(child, next);
      });
    } else {
      each(this.elements, function(child) {
        lastParent.appendChild(child);
      });
    }
    return this;
  },  /**
   * Description
   * @function Wrapper.prototype.children
   * @param {} option_S
   * @return NewExpression
   */
  children: function(option_S) {
    var newElements = [];

    if (isString(option_S)) {
      this.each(function(element) {
        each(element.children, function(child) {
          elMatches(child, option_S) && newElements.push(child);
        });
      });
    } else {
      this.each(function(element) {
        each(element.children, function(child) {
          newElements.push(child);
        });
      });
    }
    return new Wrapper(newElements);
  },  /**
   * Description
   * @function Wrapper.prototype.clone
   * @param {} withDataAndEvents
   * @param {} deepWithDataAndEvents
   * @return NewExpression
   */
  clone: function(withDataAndEvents, deepWithDataAndEvents) { /* jshint ignore:line */
    return new Wrapper(this.map(function(element) {
      return element.cloneNode(true);
    }));
  },  /**
   * Description
   * @function Wrapper.prototype.closest
   * @param {} option_S
   * @return NewExpression
   */
  closest: function(option_S) {
    var newElements = [];
    var newElement;
    this.each(function(element) {
      newElement = element.closest(option_S);
      newElement && newElements.push(newElement);
    });
    return new Wrapper(newElements);
  },  /**
   * Description
   * @function Wrapper.prototype.find
   * @param {} option_S
   * @return NewExpression
   */
  find: function(option_S) {
    var newElements = [];
    var tmpElements;

    this.each(function(element) {
      tmpElements = element.querySelectorAll(option_S);
      tmpElements && each(tmpElements, function(found) {
        newElements.push(found);
      });
    });
    return new Wrapper(newElements);
  },  /**
   * Description
   * @function Wrapper.prototype.next
   * @param {} option_S
   * @return NewExpression
   */
  next: function(option_S) {
    var newElements = [];
    var newElement;

    if (isString(option_S)) {
      this.each(function(element) {
        newElement = element.nextElementSibling;
        newElement && elMatches(newElement, option_S) && newElements.push(newElement);
      });
    } else {
      this.each(function(element) {
        newElement = element.nextElementSibling;
        newElement && newElements.push(newElement);
      });
    }
    return new Wrapper(newElements);
  },  /**
   * Description
   * @function Wrapper.prototype.parent
   * @param {} option_S
   * @return NewExpression
   */
  parent: function(option_S) {
    var newElements = [];
    var newElement;

    if (isString(option_S)) {
      this.each(function(element) {
        newElement = element.parentNode;
        newElement && elMatches(newElement, option_S) && newElements.push(newElement);
      });
    } else {
      this.each(function(element) {
        newElement = element.parentNode;
        newElement && newElements.push(newElement);
      });
    }
    return new Wrapper(newElements);
  },  /**
   * Description
   * @function Wrapper.prototype.prev
   * @param {} option_S
   * @return NewExpression
   */
  prev: function(option_S) {
    var newElements = [];
    var newElement;

    if (isString(option_S)) {
      this.each(function(element) {
        newElement = element.previousElementSibling;
        newElement && elMatches(newElement, option_S) && newElements.push(newElement);
      });
    } else {
      this.each(function(element) {
        newElement = element.previousElementSibling;
        newElement && newElements.push(newElement);
      });
    }
    return new Wrapper(newElements);
  },  /**
   * Description
   * @function Wrapper.prototype.not
   * @param {} option_S
   * @return NewExpression
   */
  not: function(option_S) {
    var newElements = this.elements.filter(function(element) {
      return !elMatches(element, option_S);
    });
    return new Wrapper(newElements);
  },  /**
   * Description
   * @function Wrapper.prototype.has
   * @param {} option_S_E
   * @return NewExpression
   */
  has: function(option_S_E) {
    var newElements = [];
    if (isString(option_S_E)) {
      newElements = this.elements.filter(function(element) {
        return elContainsSelector(element, option_S_E);
      });
    }
    if (isHTMLElement(option_S_E)) {
      newElements = this.elements.filter(function(element) {
        return (element !== option_S_E) && element.contains(option_S_E);
      });
    }
    return new Wrapper(newElements);
  },  /**
   * Description
   * @function Wrapper.prototype.siblings
   * @param {} option_S
   * @return NewExpression
   */
  siblings: function(option_S) {
    var newElements = [];

    if (isString(option_S)) {
      this.each(function(element) {
        element.parentNode && each(element.parentNode.children, function(child) {
          (child !== element) && elMatches(child, option_S) && newElements.push(child);
        });
      });
    } else {
      this.each(function(element) {
        element.parentNode && each(element.parentNode.children, function(child) {
          (child !== element) && newElements.push(child);
        });
      });
    }
    return new Wrapper(newElements);
  },  /**
   * Description
   * @function Wrapper.prototype.detach
   * @return ThisExpression
   */
  detach: function() {
    this.each(function(element) {
      element.parentNode && element.parentNode.removeChild(element);
    });
    return this;
  },  /**
   * Description
   * @function Wrapper.prototype.add
   * @param {} option_S_W_E
   * @return ThisExpression
   */
  add: function(option_S_W_E) {
    var elements = [];
    if (isHTMLElement(option_S_W_E)) {
      elements = [option_S_W_E];
    }
    if (isWrapper(option_S_W_E)) {
      elements = option_S_W_E.elements;
    }
    if (isString(option_S_W_E)) {
      elements = document.querySelectorAll(option_S_W_E);
    }
    each(elements, function(element) {
      this.elements.push(element);
    }.bind(this));
    this.length += elements.length;
    return this;
  },  /**
   * Description
   * @function Wrapper.prototype.remove
   * @param {} option_S
   * @return CallExpression
   */
  remove: function(option_S) { //todo selector
    if (isString(option_S)) {
      return this.each(function(element) {
        element.parentNode && elMatches(element, option_S) && element.parentNode.removeChild(element);
      });
    }
    return this.each(function(element) {
      element.parentNode && element.parentNode.removeChild(element);
    });
  },  /**
   * Description
   * @method Wrapper.prototype.each
   * @param {} option_F
   * @return ThisExpression
   */
  each: function(option_F) {
    this.elements.forEach(option_F);
    return this;
  },  /**
   * Description
   * @function Wrapper.prototype.filter
   * @param {} option_F_S
   * @return NewExpression
   */
  filter: function(option_F_S) {
    var newElements = [];
    if (isString(option_F_S)) {
      newElements = this.elements.filter(function(element) {
        return elMatches(element, option_F_S);
      });
    }
    if (isFunction(option_F_S)) {
      newElements = this.elements.filter(option_F_S);
    }
    return new Wrapper(newElements);
  },  /**
   * Description
   * @method Wrapper.prototype.map
   * @param {} option_F
   * @return CallExpression
   */
  map: function(option_F) {
    return this.elements.map(option_F);
  },  /**
   * Description
   * @function Wrapper.prototype.reduce
   * @param {} option_F
   * @param {} value
   * @return CallExpression
   */
  reduce: function(option_F, value) {
    return this.elements.reduce(option_F, value);
  },  /**
   * Description
   * @function Wrapper.prototype.every
   * @param {} option_F
   * @return CallExpression
   */
  every: function(option_F) {
    return this.elements.every(option_F);
  },  /**
   * Description
   * @function Wrapper.prototype.some
   * @param {} option_F
   * @return CallExpression
   */
  some: function(option_F) {
    return this.elements.some(option_F);
  },  /**
   * Description
   * @function Wrapper.prototype.sort
   * @param {} option_F
   * @return ThisExpression
   */
  sort: function(option_F) {
    this.elements.sort(option_F);
    return this;
  },  /**
   * Description
   * @function Wrapper.prototype.eq
   * @param {} option_N
   * @return ConditionalExpression
   */
  eq: function(option_N) {
    return this.length ? new Wrapper([this.elements[option_N > -1 ? option_N : (this.length - option_N)]]) : null;
  },  /**
   * Description
   * @function Wrapper.prototype.first
   * @return CallExpression
   */
  first: function() {
    return this.eq(0);
  },  /**
   * Description
   * @function Wrapper.prototype.get
   * @param {} option_N
   * @return MemberExpression
   */
  get: function(option_N) {
    if (isDefined(option_N)) {
      return this.length ? this.elements[option_N > -1 ? option_N : (this.length - option_N)] : null;
    }
    return this.elements;
  },  /**
   * Description
   * @function Wrapper.prototype.index
   * @param {} option_S_E
   * @return index
   */
  index: function(option_S_E) {
    var parentNode;
    var index = -1;

    if (isHTMLElement(option_S_E)) {
      index = this.elements.indexOf(option_S_E);
    }
    if (isString(option_S_E)) {
      index = find(this.elements, function(element) {
        return elMatches(element, option_S_E);
      });
    }
    if (this.length && (parentNode = this.elements[0].parentNode)) {
      index = find(parentNode.children, function(element) {
        return element === option_S_E;
      });
    }
    return index;
  },  /**
   * Description
   * @function Wrapper.prototype.last
   * @return CallExpression
   */
  last: function() {
    return this.eq(this.length - 1);
  },  /**
   * Description
   * @function Wrapper.prototype.focus
   * @return ThisExpression
   */
  focus: function() {
    this.length && this.elements[0].focus();
    return this;
  },  /**
   * Description
   * @function Wrapper.prototype.blur
   * @return CallExpression
   */
  blur: function() {
    return this.each(function(element) {
      element.blur();
    });
  },  /**
   * Description
   * @function Wrapper.prototype.empty
   * @return ThisExpression
   */
  empty: function() {
    this.each(function(element) {
      element.textContent = '';
    });
    return this;
  },  /**
   * Description
   * @function Wrapper.prototype.text
   * @param {} option_S
   * @return ConditionalExpression
   */
  text: function(option_S) {
    if (isDefined(option_S)) {
      return this.each(function(element) {
        element.textContent = option_S;
      });
    }
    return this.length ? this.elements[0].textContent : null;
  },  /**
   * Description
   * @function Wrapper.prototype.html
   * @param {} option_S
   * @return ConditionalExpression
   */
  html: function(option_S) {
    if (isDefined(option_S)) {
      return this.each(function(element) {
        element.innerHTML = option_S;
      });
    }
    return this.length ? this.elements[0].innerHTML : null;
  },});/**
 * Description
 * @class Clarity
 * @param {} options
 * @return Wrapper
 */
function Clarity(options) {
  var elements = [];
  if (options) {
    if (isHTMLElement(options)) {
      elements = [options];
    } else if (isHTMLString(options)) {
      elements = convertStringToHTML(options);
    } else {
      elements = convertArraylikeToArray(document.querySelectorAll(options));
    }
  }
  return new Wrapper(elements);
}
extend(Clarity, {  /**
   * Description
   * @method Clarity.prototype.ajax
   * @param {} options
   * @return request
   */
  ajax: function(options) {
    var request = new XMLHttpRequest();
    request.open(options.method, options.url, true);
    options.contentType && request.setRequestHeader('Content-Type', options.contentType);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        options.done && options.done(request, options);
      } else {
        options.error && options.error(request, options);
      }
      options.always && options.always(request, options);
      return request;
    };
    request.onerror = function() {
      options.error && options.error(request, options);
      options.always && options.always(request, options);
      return request;
    };
    request.send(options.data !== undefined ? options.data : null);
    return request;
  },  /**
   * Description
   * @method Clarity.extend
   * @return arguments
   */
  extend: extend,  /**
   * Description
   * @method Clarity.prototype.noop
   * @return Nothing.
   */
  noop: function() {},  /**
   * Description
   * @method Clarity.prototype.now
   * @param {} accurate
   * @return CallExpression
   */
  now: function(accurate) {
    return (accurate ? performance : Date).now();
  },  wrapper: Wrapper});

return Clarity;

}));
