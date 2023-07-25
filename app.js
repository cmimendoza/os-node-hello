const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const v1 = process.env.v1;

const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    
    res.end('OK 1.6  v1: '+ v1 +'');    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




