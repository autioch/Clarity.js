/**
 * Assigns properties to first passed object from all other passed objects.
 * @method extend
 * @private
 * @param {Object} objectToExtend Object to which properties will be assigned.
 * @param {...Objects} Objects whose properties will be assigned to objectToExtend.
 * @return objectToExtend
 */
function extend(objectToExtend) {
  var i, prop, mixin,
    mixins = convertArraylikeToArray(arguments, 1),
    length = mixins.length;
  for (i = 0; i < length; i++) {
    mixin = mixins[i];
    for (prop in mixin) {
      objectToExtend[prop] = mixin[prop];
    }
  }
  return objectToExtend;
}
