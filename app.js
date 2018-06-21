var express = require('express');
var app = express();

//endpoint route
app.get('/', function(req, res) {
  res.send('Hello World !!!');
});

app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

//starts server
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});