module.exports = {
  /**
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
  },
};
