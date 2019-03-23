var express = require('express');
var fs = require('fs');
var path = require('path');
var md5 = require('md5');
var multer = require('multer');
var formidable = require('formidable');
var router = express.Router();
var listTemplate = require('../lib/javascripts/imageList.js');
var detailTemplate = require('../lib/javascripts/imageDetail.js');
var uploadTemplate = require('../lib/javascripts/imageUpload.js');

var storage = multer.diskStorage({
    destination: './public/images',
    filename: function (req, file, cb){
        console.log(path.extname(file.originalname));
        cb(null, Date.now()+md5(file.fieldname)+path.extname(file.originalname));
    }
});

var upload = multer({ storage:storage });

// image list
router.get('/', (req, res, next) => {
    var source = listTemplate.HTML();
    res.send(source.toString());
});

// delete image
router.post('/delete/:id', (req, res, next) => {
    var id = path.parse(req.params.id).base;
    fs.unlink(`./public/images/${id}`, (err) => {
        if(err)
            throw err;
    });
    res.redirect('../');
});

// upload image page
router.get('/upload', (req, res, next) => {
    var source = uploadTemplate.HTML();
    res.send(source.toString());
});

// upload image process
router.post('/upload', upload.array('newImage', 1600), (req, res, next) => {
    var files = req.files;
    res.redirect('../image');
});

// see image detail
router.get('/:id', (req, res, next) => {
    var id = path.parse(req.params.id).base;
    var source = detailTemplate.HTML(id);
    res.send(source.toString());
});

module.exports = router;
