module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.sort
   * @param {} option_F
   * @return ThisExpression
   */
  sort: function(option_F) {
    this.elements.sort(option_F);
    return this;
  },
};
