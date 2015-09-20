module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.index
   * @param {} option_S_E
   * @return index
   */
  index: function(option_S_E) {
    var parentNode;
    var index = -1;

    if (isHTMLElement(option_S_E)) {
      index = this.elements.indexOf(option_S_E);
    }
    if (isString(option_S_E)) {
      index = find(this.elements, function(element) {
        return elMatches(element, option_S_E);
      });
    }
    if (this.length && (parentNode = this.elements[0].parentNode)) {
      index = find(parentNode.children, function(element) {
        return element === option_S_E;
      });
    }
    return index;
  },
};
