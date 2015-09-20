module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.get
   * @param {} option_N
   * @return MemberExpression
   */
  get: function(option_N) {
    if (isDefined(option_N)) {
      return this.length ? this.elements[option_N > -1 ? option_N : (this.length - option_N)] : null;
    }
    return this.elements;
  },
};
