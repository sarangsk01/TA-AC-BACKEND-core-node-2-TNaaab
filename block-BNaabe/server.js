// 1
const path = require('path');
const serverPath = path.join(__dirname, 'server.js');
var appPath = path.join(__dirname, 'app.js');
var indexPath = path.join(__dirname, 'index.html');
var relativePath = './index.html';

console.log(__dirname, serverPath, appPath, indexPath, relativePath);

// 2
var http = require('http');
var server = http.createServer(handleRequest);
var qs = require('querystring');

function handleRequest(req, res) {
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.method === 'POST' && req.url === '/json') {
      console.log(store);
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.end(store);
    }
    if (req.method === 'POST' && req.url === '/form') {
      console.log(store);
      var formData = qs.parse(store);
      res.end(JSON.stringify(formData));
    }
  });
}

server.listen(3000, () => {
  console.log('server listening on port 3000');
});

// 3
function handleRequest(req, res) {
  var dataFormat = ['content-type'];
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    console.log(store, dataFormat);
    if (dataFormat === 'application/json') {
      var parsedData = JSON.parse(store);
      res.end(store);
    }
    if (dataFormat === 'application/x-www-form-urlencoded') {
      var parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    }
  });
}

server.listen(9000, () => {
  console.log('server listening on port 9000');
});

// 4
function handleRequest(req, res) {
  var dataFormat = ['content-type'];
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    console.log(store, dataFormat);
    if (dataFormat === 'application/json') {
      var parsedData = JSON.parse(store);
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>Sarang</h1><h2>kulkarnisarang01@gmail.com</h2>');
    }
  });
}

server.listen(9000, () => {
  console.log('server listening on port 9000');
});

// 5
function handleRequest(req, res) {
  var dataFormat = ['content-type'];
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    console.log(store, dataFormat);
    if (dataFormat === 'application/x-www-form-urlencoded') {
      var parsedData = qs.parse(store);
      res.setHeader('Content-Type', 'text/html');
      res.write('<h2>kulkarnisarang01@gmail.com</h2>');
      res.end(JSON.stringify(parsedData));
    }
  });
}

server.listen(9000, () => {
  console.log('server listening on port 9000');
});
