module.exports = {
  /**
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
  },
};
