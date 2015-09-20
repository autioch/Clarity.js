/**
 * Description
 * @class Clarity
 * @param {} options
 * @return Wrapper
 */
function Clarity(options) {
  var elements = [];
  if (options) {
    if (isHTMLElement(options)) {
      elements = [options];
    } else if (isHTMLString(options)) {
      elements = convertStringToHTML(options);
    } else {
      elements = convertArraylikeToArray(document.querySelectorAll(options));
    }
  }
  return new Wrapper(elements);
}
