module.exports = {
  HTML:function(id){
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
                  var fileName = 'images/'+${id}.toString()+'.png';

                  document.getElementById('image').innerHTML = <img src=${fileName}>;
              </script>
        </body>
    </html>
    `;
  }
}
