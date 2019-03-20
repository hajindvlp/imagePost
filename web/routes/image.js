var express = require('express');
var fs = require('fs');
var router = express.Router();
var path = require('path');
var listTemplate = require('../public/javascripts/imageList.js');
var detailTemplate = require('../public/javascripts/imageDetail.js');

router.get('/', function(req, res, next) {
    var source = listTemplate.HTML();
    res.send(source.toString());
});

/* GET home page. */
router.get('/:id', function(req, res, next) {
    var id = path.parse(req.params.id).base;
    var source = detailTemplate.HTML(id);
    res.send(source.toString());
});

module.exports = router;
