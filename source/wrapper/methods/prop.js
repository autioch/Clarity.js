module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.prop
   * @param {} option_S_O
   * @param {} value
   * @return ConditionalExpression
   */
  prop: function(option_S_O, value) {
    if (isObject(option_S_O)) {
      return this.each(function(element) {
        own(option_S_O, function(value, key) {
          element[key] = value;
        });
      });
    }
    if (isDefined(value)) {
      return this.each(function(element) {
        element[option_S_O] = value;
      });
    }
    return this.length ? this.elements[0][option_S_O] : null;
  },
};
