/**
 * Slices passed argument to return an array. Optionally can slice from given index.
 * @method convertArraylikeToArray
 * @param {} arg Argument to be converted.
 * @param {} from Optional index, from which arg should be sliced.
 * @return An array created by slicing arg.
 * @private
 */
function convertArraylikeToArray(arg, from) {
  return Array.prototype.slice.call(arg, from || 0);
}

/**
 * Description
 * @method convertStringToHTML
 * @param {} arg
 * @return CallExpression
 * @private
 */
function convertStringToHTML(arg) {
  var root = document.createElement('div');
  root.innerHTML = arg;
  return convertArraylikeToArray(root.children);
}
