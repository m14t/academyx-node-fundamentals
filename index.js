"use strict";

var express = require('express');
var app = express();

const PORT = 3000;

app.get('/', function (req, res) {
    res.end('Hello World\n');
});

app.listen(PORT, function () {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
