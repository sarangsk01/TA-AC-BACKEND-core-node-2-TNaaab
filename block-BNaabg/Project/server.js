// server
var http = require('http');
const fs = require('fs');
var server = http.createServer(handleRequest);
var qs = require('querystring');

function handleRequest(req, res) {
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.method === 'GET' && req.url === '/form') {
      res.setHeader('Content-Type', 'text/html');
      fs.createReadStream('./form.html').pipe(res);
    }
    if (req.method === 'POST' && req.url === '/form') {
      var parsedData = qs.parse(store);
      res.setHeader('Content-Type', 'text/html');
      res.write(`<h2>${parsedData.name}</h2>`);
      res.write(`<h3>${parsedData.email}</h3>`);
      res.write(`<p>${parsedData.age}</p>`);
      res.end();
    }
  });
}

server.listen(5678, () => {
  console.log('server listening on port 5678');
});
