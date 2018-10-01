
var getHTML = require('../http-functions');

function printHTML (html) {
  var caps = html.toUpperCase();
  console.log(caps);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML(requestOptions, printHTML);