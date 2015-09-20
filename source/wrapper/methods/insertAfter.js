module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.insertAfter
   * @param {} option_S_W_E
   * @return ThisExpression
   */
  insertAfter: function(option_S_W_E) {
    var elements = parse_S_W_E(option_S_W_E);
    var lastParent = elements.slice(-1, 1);
    var next;
    var childs;
    each(elements, function(element) {
      next = element.nextSibling;
      childs = this.clone().elements;
      if (next) {
        each(childs, function(child) {
          element.parentNode.insertBefore(child, next);
        });
      } else {
        each(childs, function(child) {
          element.appendChild(child);
        });
      }
    });
    next = lastParent.nextSibling;
    if (next) {
      each(childs, function(child) {
        lastParent.parentNode.insertBefore(child, next);
      });
    } else {
      each(childs, function(child) {
        lastParent.appendChild(child);
      });
    }
    return this;
  },
};
