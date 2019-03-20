var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var source = fs.readFileSync('./public/javascripts/swipe.js');
    res.send(source.toString());
});

module.exports = router;
