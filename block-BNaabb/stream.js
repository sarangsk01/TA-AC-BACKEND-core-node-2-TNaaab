var http = require('http');
var server = http.createServer(handleRequest);
var url = require('url');

function handleRequest(req, res) {
  var store = '';
  if (req.method === 'POST' && req.url === '/') {
    req.on('data', (chunk) => {
      store = store + chunk;
    });
    req.on('end', () => {
      console.log(store);
    });
    res.write(store);
  }
}

server.listen(3456, () => {
  console.log('server listening on port 3456');
});
