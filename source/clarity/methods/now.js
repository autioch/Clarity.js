module.exports = {
  /**
   * Description
   * @method Clarity.prototype.now
   * @param {} accurate
   * @return CallExpression
   */
  now: function(accurate) {
    return (accurate ? performance : Date).now();
  },
};
