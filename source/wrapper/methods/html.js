module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.html
   * @param {} option_S
   * @return ConditionalExpression
   */
  html: function(option_S) {
    if (isDefined(option_S)) {
      return this.each(function(element) {
        element.innerHTML = option_S;
      });
    }
    return this.length ? this.elements[0].innerHTML : null;
  },
};
