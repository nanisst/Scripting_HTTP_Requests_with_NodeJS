
var getHTML = require('../http-functions');

function printHTML (html) {
  var caps = html.toLowerCase();
  console.log(caps);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, printHTML);