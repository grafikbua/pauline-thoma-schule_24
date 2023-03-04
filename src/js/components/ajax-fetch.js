//
// WIP
// TODO: Split code in modern and Legacy, comare smashingmag article - as this adds a LOT of code. Use xhr for now
//

exports.get = (options) => {
  const method = options.method || 'GET';
  const url = new Request(options.url);
  const async = options.async || true;
  const user = options.user || false;
  const password = options.password || false;

  const success = options.success || false;
  const error = options.error || false;
  const abort = options.abort || false;
  const progress = options.progress || false;
  const status = options.status || false;

  fetch(url)
    .then(response => response.text())
    .then(data => console.log(data));

  // xhr.onload = function() {
  //   if (this.status >= 200 && this.status < 400) {
  //     success(this);
  //   } else {
  //     error(this);
  //   }

  //   if (status) {
  //     status[this.status](this);
  //   }
  // };

  // xhr.onerror = function() {
  //   error(this);
  // };

  // xhr.onabort = function() {
  //   abort(this);
  // };

  // xhr.onprogress = function() {
  //   progress(this);
  // };

  // xhr.onabort = function() {
  //   error(this);
  // };

  // xhr.send();
}