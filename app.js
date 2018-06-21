var express = require('express');
var app = express();

//endpoint route
app.get('/', function(req, res) {
  res.send('Hello World !!!');
});

//starts server
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});