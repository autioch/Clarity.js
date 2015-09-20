module.exports = {
  /**
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
  },
};
