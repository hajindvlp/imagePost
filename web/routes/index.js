var express = require('express');
var router = express.Router();
var frontPage = require('../lib/javascripts/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    var source = frontPage.HTML();
    res.send(source.toString());
});

module.exports = router;
