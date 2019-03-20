var fs = require('fs');

function getList(){
    var list;
    fs.readdirSync("./public/images").forEach((file) => {
        list+=`<a href="../images/${file}" style="margin:5px"><img src="../images/${file}" height="42" width="42"></a>`;
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
                <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
            </head>
            <body>
                ${list}
            </body>
        </html>
        `;
    }
}
