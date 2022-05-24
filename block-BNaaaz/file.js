const { createReadStream } = require('fs');
var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  fs.createReadStream('./readme.txt').pipe(res);
}
