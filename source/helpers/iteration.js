/**
 * Description
 * @method own
 * @param {} object
 * @param {} callback
 * @return object
 * @private
 */
function own(object, callback) {
  for (var prop in object) {
    object.hasOwnProperty(prop) && callback(object[prop], prop);
  }
  return object;
}

/**
 * Description
 * @method find
 * @param {} list
 * @param {} callback
 * @return UnaryExpression
 * @private
 */
function find(list, callback) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (callback(list[i], i)) {
      return i;
    }
  }
  return -1;
}

/**
 * Description
 * @method each
 * @param {} list
 * @param {} callback
 * @return list
 * @private
 */
function each(list, callback) {
  for (var i = 0, length = list.length; i < length; i++) {
    callback(list[i], i);
  }
  return list;
}
