"use strict";

let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.render('chat/index');
});

module.exports = router;
