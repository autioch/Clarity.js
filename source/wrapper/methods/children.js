module.exports = {
  /**
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
  },
};
