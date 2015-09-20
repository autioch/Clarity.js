module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.filter
   * @param {} option_F_S
   * @return NewExpression
   */
  filter: function(option_F_S) {
    var newElements = [];
    if (isString(option_F_S)) {
      newElements = this.elements.filter(function(element) {
        return elMatches(element, option_F_S);
      });
    }
    if (isFunction(option_F_S)) {
      newElements = this.elements.filter(option_F_S);
    }
    return new Wrapper(newElements);
  },
};
