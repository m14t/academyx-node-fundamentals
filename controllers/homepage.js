"use strict";

let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {msg: 'Hello World'});
});

module.exports = router;
