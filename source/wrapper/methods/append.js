module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.append
   * @param {} option_S_W_E
   * @return CallExpression
   */
  append: function(option_S_W_E) {
    var elements = new Wrapper(parse_S_W_E(option_S_W_E));
    var lastIndex = this.length - 1;
    var childs;
    return this.each(function(element, index) {
      childs = (index === lastIndex) ? elements.elements : elements.clone().elements;
      each(childs, function(child) {
        element.appendChild(child);
      });
    });
  },
};
