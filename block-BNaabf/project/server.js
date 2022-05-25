// path
const path = require('path');
const indexPath = path.join(__dirname, 'index.js');
var relativePath = '__filename';
console.log(indexPath, relativePath);

// server
var http = require('http');
const { fstat } = require('fs');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.method === 'GET' && req.url === '/form') {
      fstat.readFile('./form.html', (err, content) => {
        if (err) console.log(err);
        console.log(content);
        res.end(content);
      });
    }
  });
}

server.listen(5678, () => {
  console.log('server listening on port 5678');
});
