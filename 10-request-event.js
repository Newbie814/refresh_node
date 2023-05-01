const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.end('yo yo yo yo');
});

console.log(server);

server.listen(5000);
