module.exports = {
  /**
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
  },
};
