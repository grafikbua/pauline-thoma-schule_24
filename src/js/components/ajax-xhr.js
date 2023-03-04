// const successFunction = function(event) {
//   console.log('success');
//   console.log(event);
// }

// const errorFunction = function(event) {
//   console.log('error');
//   console.log(event);
// }

// const progressFunction = function(event) {
//   console.log('progress');
//   console.log(event);
// }

// ajax.get({
//   url: '/components/preview/ajax--document-big',
//   success: event => successFunction(event),
//   progress: event => progressFunction(event),
//   error: event => errorFunction(event),
//   loader: {
//     loadingClass: 'is-loading',
//     completeClass: 'is-loaded',
//     target: 'body, .load-button'
//   },
//   status: {
//     404: event => { console.log('status 404'); console.log(event)},
//     200: event => { console.log('status 200'); console.log(event)}
//   }
// });

exports.get = (options) => {
  const xhr = new XMLHttpRequest();
  const method = options.method || 'GET';
  const url = options.url;
  const async = options.async || true;
  const user = options.user || false;
  const password = options.password || false;
  const responseType = options.responseType || 'document';

  const success = options.success || false;
  const error = options.error || false;
  const abort = options.abort || false;
  const progress = options.progress || false;
  const status = options.status || false;
  const loader = options.loader || false;
  const loaderTargets = document.querySelectorAll(loader.target);

  // Loader
  // {
  //   loadingClass: 'is-loading',
  //   completeClass: 'is-loaded',
  //   target: 'body'
  // }

  const loading = {
    start: () => {
      for (var i = loaderTargets.length - 1; i >= 0; i--) {
        let target = loaderTargets[i]
        target.classList.add(loader.loadingClass);
        target.classList.remove(loader.completeClass);
      }
    },
    stop: () => {
      for (var i = loaderTargets.length - 1; i >= 0; i--) {
        let target = loaderTargets[i]
        target.classList.remove(loader.loadingClass);
        target.classList.add(loader.completeClass);
      }
    }
  }

  // XHR Request

  xhr.responseType = responseType;

  xhr.open(
    method,
    url,
    async,
    user,
    password
  );

  xhr.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      success(this);
    } else {
      error(this);
    }

    // Maps the functions defined in Status Object to actual status
    if (status) {
      status[this.status](this);
    }

    loading.stop();
  };

  xhr.onerror = function() {
    error(this);
  };

  if (progress) {
    xhr.onprogress = function() {
      progress(this);
    };
  }

  if (abort) {
    xhr.onabort = function() {
      abort(this);
    };
  } else {
    xhr.onabort = function() {
      error(this);
    };
  }

  xhr.send();
  loading.start();
}