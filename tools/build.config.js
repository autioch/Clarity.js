function stripModule(data) {
  return data.split('\n').slice(1, -2).join('\n');
}

module.exports = {
  output: './../build/clarity.js',
  outputMinified: './../build/clarity.min.js',
  input: [{
    path: './../source/',
    files: ['factoryBefore'],
  }, {
    path: './../source/helpers/',
    files: ['extend', 'conversion', 'element', 'iteration', 'parse', 'type']
  }, {
    path: './../source/wrapper/',
    files: ['wrapper']
  }, {
    text: 'extend(Wrapper.prototype, {'
  }, {
    path: './../source/wrapper/methods/',
    files: [
      'addClass', 'hasClass', 'removeClass', 'toggleClass',
      'attr', 'css', 'prop', 'removeAttr', 'val',
      'offset', 'position',
      'after', 'before', 'append', 'prepend', 'replaceWith',
      'insertAfter', 'insertBefore', 'appendTo', 'prependTo',
      'children', 'clone', 'closest', 'find', 'next', 'parent', 'prev', 'not', 'has', 'siblings',
      'detach', 'add', 'remove',
      'each', 'filter', 'map', 'reduce', 'every', 'some', 'sort',
      'eq', 'first', 'get', 'index', 'last',
      'focus', 'blur',
      'empty', 'text', 'html'
    ],
    callback: stripModule
  }, {
    text: '});'
  }, {
    path: './../source/clarity/',
    files: ['clarity']
  }, {
    text: 'extend(Clarity, {'
  }, {
    path: './../source/clarity/methods/',
    files: ['ajax', 'extend', 'noop', 'now', 'wrapper'],
    callback: stripModule
  }, {
    text: '});'
  }, {
    path: './../source/',
    files: ['factoryAfter'],
  }]
};
