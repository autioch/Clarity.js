module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.focus
   * @return ThisExpression
   */
  focus: function() {
    this.length && this.elements[0].focus();
    return this;
  },
};
