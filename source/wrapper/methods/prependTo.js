module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.prependTo
   * @param {} option_S_W_E
   * @return ThisExpression
   */
  prependTo: function(option_S_W_E) {
    var next;
    var elements = parse_S_W_E(option_S_W_E);
    var lastParent = elements.slice(-1, 1);
    var childs;
    each(elements, function(parent) {
      next = parent.nextSibling;
      childs = this.clone().elements;
      if (next) {
        each(childs, function(child) {
          parent.parentNode.insertBefore(child, next);
        });
      } else {
        each(childs, function(child) {
          parent.appendChild(child);
        });
      }
    });
    next = lastParent.nextSibling;
    if (next) {
      each(this.elements, function(child) {
        lastParent.parentNode.insertBefore(child, next);
      });
    } else {
      each(this.elements, function(child) {
        lastParent.appendChild(child);
      });
    }
    return this;
  },
};
