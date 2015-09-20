module.exports = {
  /**
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
  },
};
