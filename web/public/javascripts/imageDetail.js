const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function getPath(id){
    var url = 'mongodb://localhost:27017/';
    var dbName = 'image';
    var client = new MongoClient(url);
    var path;

    MongoClient.connect(url, function (err, client) {
        if (err) {
        console.log(id);
            path = "error";
            return;
        }

        var db = client.db;
        var image = db.collection('image');
        // ObjectId("5c8f38a5a753fbf3f036e7e4")
        image.findOne({_id : `ObjectId({"${id}"})`}, (err, docs) => {
            console.log(docs);
        });

        console.log(db);
    });
}

module.exports = {
    HTML:function(id){
        getPath(id);
        var fileName = `../images/${id}.png`;
        // console.log(fileName);
        return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
            </head>
            <body>
                  <div id = "image">
                      Rendering...
                  </div>

                  <script type="text/javascript">
                      document.getElementById('image').innerHTML = '<img src="${fileName}">';
                  </script>
            </body>
        </html>
        `;
    }
}
