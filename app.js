const express = require('express');
const app = express();

//endpoint route
app.get('/', function(req, res) {
  res.send('Hello World !!!');
});

app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

var wiki = require('./wiki.js');
app.use('/wiki', wiki);

//starts server
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});