module.exports = {
  /**
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
  },
};
