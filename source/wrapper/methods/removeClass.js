module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.removeClass
   * @param {} option_S
   * @return CallExpression
   */
  removeClass: function(option_S) {
    var classNames = option_S.split(' ');
    return this.each(function(element) {
      element.classList.remove(classNames);
    });
  },
};
