module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.prepend
   * @param {} option_S_W_E
   * @return CallExpression
   */
  prepend: function(option_S_W_E) {
    var elements = new Wrapper(parse_S_W_E(option_S_W_E));
    var lastIndex = this.length - 1;
    var childs, firstChild;
    return this.each(function(element, index) {
      childs = (index === lastIndex) ? elements.elements : elements.clone().elements;
      firstChild = element.parentNode.firstChild;
      if (firstChild) {
        each(childs, function(child) {
          element.parentNode.insertBefore(child, firstChild);
        });
      } else {
        each(childs, function(child) {
          element.appendChild(child);
        });
      }
    });
  },
};
