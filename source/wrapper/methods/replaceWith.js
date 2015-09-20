module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.replaceWith
   * @param {} option_S
   * @return ThisExpression
   */
  replaceWith: function(option_S) {
    if (isString(option_S)) {
      return this.each(function(element) {
        element.outerHTML = option_S;
      });
    }
    return this;
  },
};
