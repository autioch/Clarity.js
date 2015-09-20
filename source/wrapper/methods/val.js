module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.val
   * @param {} option_S
   * @return ConditionalExpression
   */
  val: function(option_S) {
    if (isDefined(option_S)) {
      return this.each(function(element) {
        element.value = option_S;
      });
    }
    return this.length ? this.elements[0][option_S] : null;
  },
};
