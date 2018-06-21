const express = require('express');
const app = express();

//endpoint route
app.get('/', function(req, res) {
  res.send('Hello World !!!');
});

// An example middleware function for all routes except /
let a_middleware_function = function(req, res, next) {
  console.log('middleware function');
  next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

var wiki = require('./wiki.js');
app.use('/wiki', wiki);

function someroute_middleware(req, res, next) {
  res.send('some route');
  console.log('accessed /some route');
  next(); // pass control to the next handler
}

// Function added with use() for a specific route
app.use('/someroute', someroute_middleware);

// A middleware function added for a specific HTTP verb and route
//app.get('/', a_middleware_function);

//starts server
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});