import $retrieve from '../utils/retrieve';

module.exports = (element, options, callback) => {
  element = $retrieve(element);

  let className = options.class || 'is-morphing';
  let duration = options.duration || 200;

  element.classList.add(className);

  setTimeout(() => {
    element.classList.remove(className);
    callback();
  }, duration);
}