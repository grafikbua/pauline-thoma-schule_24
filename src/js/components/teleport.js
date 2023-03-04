//
// Utility Class to enable easy loading from one url to another
// TODO: check if whitelist is needed and how to prevent ugly innerHTML stuff.
//

// Check what was given in -> https://stackoverflow.com/questions/7238177/how-to-detect-htmlcollection-nodelist-in-javascript
const getDomNode = item => {
  if (typeof item === 'string') {
    return document.querySelector(item);
  }

  if (HTMLElement.prototype.isPrototypeOf(item)) {
    return item;
  }

  console.error('You passed a variable of type ' + item + '. It must be either a String or a HTML Element.')
  return false;
}

exports.document = (options) => {
  let xhr = new XMLHttpRequest();
  let url = options.url || false;
  let type = options.type || 'document';
  let async = options.async || true;
  let method = 'GET';

  // Loader
  let loadingClass = options.loadingClass || 'is-loading';
  let loadTemplate = options.loadTemplate || '<div class="loading-indicator"></div>';
  let completeClass = options.completeClass || 'is-complete';
  let errorClass = options.errorClass || 'has-error';

  // Assigns functions if defined
  let load = options.load || false;
  let success = options.success || false;
  let error = options.error || false;

  // Accepts a query selector string or a certain node
  let source = options.source || false;
  let target = getDomNode(options.target) || false;

  const teleportSuccess = event => {
    let html = event.response.querySelector(source);

    if (html) {
      target.innerHTML = html.innerHTML;
    } else {
      console.error('Could not find "from" node in document.')
    }
  }

  const teleportError = event => {
    console.error('Error loading ' + url);
  }

  const teleportLoad = {
    start: () => {
      target.innerHTML = loadTemplate;
      target.classList.add(loadingClass);
      target.classList.remove(completeClass);
    },
    stop: () => {
      target.classList.remove(loadingClass);
      target.classList.add(completeClass);
    }
  }

  // XHR Request
  xhr.responseType = type;
  xhr.open(
    method,
    url,
    async
  );

  xhr.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      success ?? success(this);
      teleportSuccess(this);
    } else {
      error ?? error(this);
      teleportError(this);
    }

    teleportLoad.stop();
  };

  xhr.onerror = function() {
    error ?? error(this);
    teleportError(this);
  };

  xhr.send();
  teleportLoad.start();
}