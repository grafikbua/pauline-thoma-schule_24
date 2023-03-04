import is from '../utils/is';

module.exports = item => {
  item = is.htmlElement(item) ? item : document.querySelector(item);
  return item;
}