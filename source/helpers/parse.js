  /**
   * Description
   * @method parse_S_W_E
   * @param {} option_S_W_E
   * @return elements
   * @private
   */
  function parse_S_W_E(option_S_W_E) {
    var elements = [];
    if (isString(option_S_W_E)) {
      elements = convertArraylikeToArray(document.querySelectorAll(option_S_W_E));
    } else if (isWrapper(option_S_W_E)) {
      elements = option_S_W_E.elements;
    } else if (isHTMLElement(option_S_W_E)) {
      elements = [option_S_W_E];
    }
    return elements;
  }
