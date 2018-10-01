var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

  var string = '';
  response.on('data',function(buffer){
    var part = buffer.toString();
    string += part;
    console.log('stream data ' + part);
  });

  response.on('end',function(){
   console.log('final output ' + string);
  });

});

}
getAndPrintHTML();

