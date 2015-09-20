module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.after
   * @param {} option_S_W_E
   * @return CallExpression
   */
  after: function(option_S_W_E) {
    var elements = new Wrapper(parse_S_W_E(option_S_W_E));
    var lastIndex = this.length - 1;
    var childs, next;
    return this.each(function(element, index) {
      childs = (index === lastIndex) ? elements.elements : elements.clone().elements;
      next = parent.nextSibling;
      if (next) {
        element.parentNode && each(elements.clone().elements, function(child) {
          element.parentNode.insertBefore(child, element);
        });
      } else {
        element.parentNode && each(elements.clone().elements, function(child) {
          element.parentNode.appendChild(child);
        });
      }
    });
  },
};
