var fs = require('fs');

module.exports = {
    HTML:function(){
        return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="/stylesheets/style.css">
                <title>소혜 DB</title>
            </head>
            <body>
                <div id="content">
                    <h1>소혜 데이터베이스</h1>
                    <img src="/cover.png" alt="cover" class="headImage">
                    <ul class="navigator">
                        <li class="category"><a href="/" class="link">홈</a></li>
                        <li class="category"><a href="/image" class="link">갤러리</a></li>
                        <li class="category"><a href="/image/upload" class="link">업로드</a></li>
                    </ul>

                    <div id="announce">
                        2019.03.20~2019.03.23 동안 한 펭귄이 개발함...<br>
                        사진 많이 많이 올려주세용~~
                        <div id="red">부적합한 사진 올릴시 사용 제한당할 수 있습니다.</div>
                    </div>
                </div>
            </body>
        </html>
        `;
    }
}
