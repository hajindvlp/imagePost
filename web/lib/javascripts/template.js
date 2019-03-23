var fs = require('fs');

module.exports = {
    header:function(){
        return `
                <h1>소혜 데이터베이스</h1>
                <img src="/cover.png" alt="cover" class="headImage">
                <ul class="navigator">
                    <li class="category"><a href="/" class="link">홈</a></li>
                    <li class="category"><a href="/image/list" class="link">갤러리</a></li>
                    <li class="category"><a href="/image/upload" class="link">업로드</a></li>
                </ul>`;
    },
    head:function(){
        return `
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="/stylesheets/style.css">
                <title>소혜 DB</title>
            `;
    },
    getList:function(id){
        var list='';
        var files = fs.readdirSync("./public/images");
        id = Math.floor(files.length/40)-id+1;

        for(var i = (id-1)*40 ; i<id*40 ; i++)
            if(files[i]!=undefined)
                list+=`<a href="/image/${files[i]}" id="imageLink"><img src="/images/${files[i]}" id="imageThumbnail"></a>`;
        return list;
    },
    getListNum:function(){
        var numList='< ';
        var files = fs.readdirSync("./public/images");
        for(var i = 1 ; i<=Math.floor(files.length/40) ; i++)
            numList+=`<a href="/image/list/${i}">${i} </a>`;
        numList+='>';
        return numList.toString();
    }
}
