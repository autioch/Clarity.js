module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.removeAttr
   * @param {} option_S
   * @return CallExpression
   */
  removeAttr: function(option_S) {
    var i,
      attributes = option_S.split(' '),
      length = attributes.length;
    return this.each(function(element) {
      for (i = 0; i < length; i++) {
        element.removeAttribute(attributes[i]);
      }
    });
  },
};
