module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.insertBefore
   * @param {} option_S_W_E
   * @return ThisExpression
   */
  insertBefore: function(option_S_W_E) {
    var elements = parse_S_W_E(option_S_W_E);
    var lastParent = elements.slice(-1, 1);
    each(elements, function(element) {
      each(this.clone().elements, function(child) {
        element.parentNode.insertBefore(child, element);
      });
    });
    each(this.elements, function(child) {
      lastParent.parentNode.insertBefore(child, lastParent);
    });
    return this;
  },
};
