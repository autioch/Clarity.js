module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.detach
   * @return ThisExpression
   */
  detach: function() {
    this.each(function(element) {
      element.parentNode && element.parentNode.removeChild(element);
    });
    return this;
  },
};
