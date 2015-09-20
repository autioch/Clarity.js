module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.toggleClass
   * @param {} option_S
   * @param {} condition
   * @return CallExpression
   */
  toggleClass: function(option_S, condition) {
    var i,
      method = isDefined(condition) ? (condition ? 'add' : 'remove') : 'toggle',
      classNames = option_S.split(' '),
      length = classNames.length;
    return this.each(function(element) {
      for (i = 0; i < length; i++) {
        element.classList[method](option_S);
      }
    });
  },
};
