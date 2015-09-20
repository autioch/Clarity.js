module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.css
   * @param {} option_S_O
   * @param {} value
   * @return ConditionalExpression
   */
  css: function(option_S_O, value) {
    if (isObject(option_S_O)) {
      return this.each(function(element) {
        own(option_S_O, function(value, key) {
          element.style[key] = value;
        });
      });
    }
    if (isDefined(value)) {
      return this.each(function(element) {
        element.style[option_S_O] = value;
      });
    }
    return this.length ? getComputedStyle(this.elements[0], option_S_O) : null;
  },
};
