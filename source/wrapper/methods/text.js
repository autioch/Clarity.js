module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.text
   * @param {} option_S
   * @return ConditionalExpression
   */
  text: function(option_S) {
    if (isDefined(option_S)) {
      return this.each(function(element) {
        element.textContent = option_S;
      });
    }
    return this.length ? this.elements[0].textContent : null;
  },
};
