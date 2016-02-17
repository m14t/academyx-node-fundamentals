"use strict";

var express = require('express');
var app = express();

const PORT = 3000;

app.set('view engine', 'jade');

app.use(
    '/static',
    [
        express.static('node_modules/jquery/dist'),
        express.static('node_modules/socket.io-client'),
    ]
);

app.use('/', require('./controllers/homepage'));
app.use('/login', require('./controllers/authorization'));

app.listen(PORT, function () {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
