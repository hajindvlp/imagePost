var fs = require('fs');
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
                    2019.03.20~2019.03.23 동안 한 펭귄이 개발함...<br>
                    사진 많이 많이 올려주세용~~
                    <div id="red">부적합한 사진 올릴시 이용 제한당할 수 있습니다.</div>
                </div>
            </body>
        </html>
        `;
    }
}
