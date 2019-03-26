var template = require('./template.js');

module.exports = {
    HTML:function(id){
        var head = template.head().toString();
        var header = template.header().toString();
        var list = template.getList(id).toString();
        var listNum = template.getListNum().toString();
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
                <div id="listNum">
                    ${listNum}
                </div>
                <div id="content">
                    ${list}
                </div>
                <div id="listNum">
                    ${listNum}
                </div>
            </body>
        </html>
        `;
    }
}
