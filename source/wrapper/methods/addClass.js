module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.addClass
   * @param {} option_S
   * @return CallExpression
   */
  addClass: function(option_S) {
    var classNames = option_S.split(' ');
    return this.each(function(element) {
      element.classList.add(classNames);
    });
  },
};
