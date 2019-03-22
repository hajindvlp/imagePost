var express = require('express');
var fs = require('fs');
var path = require('path');
var md5 = require('md5');
var formidable = require('formidable');
var router = express.Router();
var listTemplate = require('../public/javascripts/imageList.js');
var detailTemplate = require('../public/javascripts/imageDetail.js');
var uploadTemplate = require('../public/javascripts/upload.js')

router.get('/', (req, res, next) => {
    var source = listTemplate.HTML();
    res.send(source.toString());
});


router.post('/delete/:id', (req, res, next) => {
    var id = path.parse(req.params.id).base;
    fs.unlink(`./public/images/${id}`, (err) => {
        if(err)
            throw err;
    });
    console.log("delete method");
    res.redirect('../');
});

/* GET home page. */
router.get('/:id', (req, res, next) => {
    var id = path.parse(req.params.id).base;
    var source = detailTemplate.HTML(id);
    res.send(source.toString());
});

router.post('/upload', (req, res, next) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var now  = new Date();
        var oldpath = files.newImage.path;
        var newpath = './public/images/'+ md5(files.newImage.name+now);
        console.log(files);
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
        });
    });
    res.redirect('../image');
});

module.exports = router;
