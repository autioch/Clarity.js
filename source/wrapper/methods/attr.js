module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.attr
   * @param {} option_S_O
   * @param {} value
   * @return ConditionalExpression
   */
  attr: function(option_S_O, value) {
    if (isObject(option_S_O)) {
      return this.each(function(element) {
        own(option_S_O, function(value, key) {
          element.setAttribute(key, value);
        });
      });
    }
    if (isDefined(value)) {
      return this.each(function(element) {
        element.setAttribute(option_S_O, value);
      });
    }
    return this.length ? this.elements[0].getAttribute(option_S_O) : null;
  },
};
