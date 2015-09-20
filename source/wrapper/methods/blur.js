module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.blur
   * @return CallExpression
   */
  blur: function() {
    return this.each(function(element) {
      element.blur();
    });
  },
};
