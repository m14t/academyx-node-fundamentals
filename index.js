"use strict";

let http = require('http');
const PORT = 3000;

http.createServer(function (req, res) {

  res.writeHead(
    200,
    {
      'Content-Type': 'text/plain'
    }
  );

  res.end('Hello World\n');

}).listen(PORT);

console.log(`Server running at http://0.0.0.0:${PORT}/`);
