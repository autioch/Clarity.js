module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.empty
   * @return ThisExpression
   */
  empty: function() {
    this.each(function(element) {
      element.textContent = '';
    });
    return this;
  },
};
