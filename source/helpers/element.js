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
