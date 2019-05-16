var template = require('./template.js');

module.exports = {
    HTML:function(){
        var head = template.head().toString();
        var header = template.header().toString();
        return `
        <!doctype html>
        <html>
            <head>
                ${head}
            </head>
            <body>
                <div id="header">
                    ${header}
                </div>
                <div id="content">
                    <form class="imageUpload" action="../image/upload" method="post" enctype="multipart/form-data">
                        <input type="file" name="newImage" value="upload" id="upload" size="60" multiple>
                        <input type="submit" id="button" value="업로드">
                    </form>
                </div>
            </body>
        </html>
        `;
    }
}
