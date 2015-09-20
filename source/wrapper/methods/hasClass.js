module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.hasClass
   * @param {} option_S
   * @return CallExpression
   */
  hasClass: function(option_S) {
    return this.some(function(element) {
      return element.classList.contains(option_S);
    });
  },
};
