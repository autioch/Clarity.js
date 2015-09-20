module.exports = {
  /**
   * Description
   * @function Wrapper.prototype.clone
   * @param {} withDataAndEvents
   * @param {} deepWithDataAndEvents
   * @return NewExpression
   */
  clone: function(withDataAndEvents, deepWithDataAndEvents) { /* jshint ignore:line */
    return new Wrapper(this.map(function(element) {
      return element.cloneNode(true);
    }));
  },
};
