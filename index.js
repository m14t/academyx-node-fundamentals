"use strict";

let http = require('http');
let status = require('statuses');

const PORT = 3000;

http.createServer(function (req, res) {

    res.writeHead(
        status('OK'),
        {
            'Content-Type': 'text/plain'
        }
    );

    res.end('Hello World\n');

}).listen(PORT);

console.log(`Server running at http://0.0.0.0:${PORT}/`);
