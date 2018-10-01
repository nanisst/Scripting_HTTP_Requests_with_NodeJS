
var getHTML = require('../http-functions');

function printHTML (html) {
  var caps = html.split("").reverse().join("");
  console.log(caps);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printHTML);

