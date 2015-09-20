module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.appendTo
   * @param {} option_S_W_E
   * @return ThisExpression
   */
  appendTo: function(option_S_W_E) {
    var elements = parse_S_W_E(option_S_W_E);
    var lastParent = elements.slice(-1, 1);
    each(elements, function(parent) {
      each(this.clone().elements, function(child) {
        parent.appendChild(child);
      });
    });
    each(this.elements, function(child) {
      lastParent.appendChild(child);
    });
    return this;
  },
};
