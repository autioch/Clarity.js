module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.offset
   * @return ObjectExpression
   */
  offset: function() {
    if (!this.length) {
      return null;
    }
    var rect = this.elements[0].getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    };
  },
};
