module.exports = {
  /**
   * Description
   * @method Clarity.prototype.ajax
   * @param {} options
   * @return request
   */
  ajax: function(options) {
    var request = new XMLHttpRequest();
    request.open(options.method, options.url, true);
    options.contentType && request.setRequestHeader('Content-Type', options.contentType);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        options.done && options.done(request, options);
      } else {
        options.error && options.error(request, options);
      }
      options.always && options.always(request, options);
      return request;
    };
    request.onerror = function() {
      options.error && options.error(request, options);
      options.always && options.always(request, options);
      return request;
    };
    request.send(options.data !== undefined ? options.data : null);
    return request;
  },
};
