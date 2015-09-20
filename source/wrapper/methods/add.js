module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.add
   * @param {} option_S_W_E
   * @return ThisExpression
   */
  add: function(option_S_W_E) {
    var elements = [];
    if (isHTMLElement(option_S_W_E)) {
      elements = [option_S_W_E];
    }
    if (isWrapper(option_S_W_E)) {
      elements = option_S_W_E.elements;
    }
    if (isString(option_S_W_E)) {
      elements = document.querySelectorAll(option_S_W_E);
    }
    each(elements, function(element) {
      this.elements.push(element);
    }.bind(this));
    this.length += elements.length;
    return this;
  },
};
