module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.eq
   * @param {} option_N
   * @return ConditionalExpression
   */
  eq: function(option_N) {
    return this.length ? new Wrapper([this.elements[option_N > -1 ? option_N : (this.length - option_N)]]) : null;
  },
};
