var fs = require('fs');

function getList(){
    var list='';
    fs.readdirSync("./public/images").forEach((file) => {
        list+=`<a href="../image/${file}" id="imageLink"><img src="../images/${file}" id="imageThumbnail"></a>`;
    });
    return list;
}

module.exports = {
    HTML:function(){
        var list = getList();
        return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/stylesheets/style.css">
            </head>
            <body>
                <form class="imageUpload" action="../image/upload" method="post" enctype="multipart/form-data">
                    <input type="file" name="newImage" value="upload" multiple>
                    <input type="submit">
                </form>
                <br/>
                ${list}
            </body>
        </html>
        `;
    }
}
