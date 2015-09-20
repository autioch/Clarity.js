module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.not
   * @param {} option_S
   * @return NewExpression
   */
  not: function(option_S) {
    var newElements = this.elements.filter(function(element) {
      return !elMatches(element, option_S);
    });
    return new Wrapper(newElements);
  },
};
