var template = require('./template.js');

module.exports = {
    HTML:function(id){
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
                    <img src="/images/${id}" id="imageDetail">
                </div>
            </body>
        </html>
        `;
    }
}
