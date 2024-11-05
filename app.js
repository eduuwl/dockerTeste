const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Docker!');
});

server.listen(8080, () => {
  console.log('da um ctrl click no link aqui http://localhost:8080');
});
