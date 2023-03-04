// Thanks https://github.com/juliangarnier/anime/blob/master/src/index.js

const is = {
  array: a => Array.isArray(a),
  svg: a => a instanceof SVGElement,
  input: a => a instanceof HTMLInputElement,
  htmlElement: a => a instanceof Element || a instanceof HTMLDocument,
  string: a => typeof a === 'string',
  function: a => typeof a === 'function',
  undefined: a => typeof a === 'undefined',
}

module.exports = is;