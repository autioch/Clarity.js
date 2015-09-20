module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.find
   * @param {} option_S
   * @return NewExpression
   */
  find: function(option_S) {
    var newElements = [];
    var tmpElements;

    this.each(function(element) {
      tmpElements = element.querySelectorAll(option_S);
      tmpElements && each(tmpElements, function(found) {
        newElements.push(found);
      });
    });
    return new Wrapper(newElements);
  },
};
