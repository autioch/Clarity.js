module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.position
   * @return ConditionalExpression
   */
  position: function() {
    return this.length ? this.elements[0].getBoundingClientRect() : null;
  },
};
