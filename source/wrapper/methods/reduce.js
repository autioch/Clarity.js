module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.reduce
   * @param {} option_F
   * @param {} value
   * @return CallExpression
   */
  reduce: function(option_F, value) {
    return this.elements.reduce(option_F, value);
  },
};
