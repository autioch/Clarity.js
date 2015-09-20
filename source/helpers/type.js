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
