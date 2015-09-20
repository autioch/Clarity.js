module.exports = {
  /**
   * Description
   * @method Wrapper.prototype.each
   * @param {} option_F
   * @return ThisExpression
   */
  each: function(option_F) {
    this.elements.forEach(option_F);
    return this;
  },
};
