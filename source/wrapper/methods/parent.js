module.exports = {
  /**
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
  },
};
