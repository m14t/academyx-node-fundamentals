"use strict";

var express = require('express');
var app = express();

const PORT = 3000;

app.set('view engine', 'jade');

app.use('/', require('./controllers/homepage'));

app.listen(PORT, function () {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
