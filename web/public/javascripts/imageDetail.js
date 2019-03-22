module.exports = {
    HTML:function(id){
        var fileName = `../images/${id}`;
        return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
            </head>
            <body>
                  <div id="imageGrid">
                      Rendering...
                  </div>

                  <form class="imageDelete" action="../image/delete/${id}" method="post">
                      <input type="submit">
                  </form>

                  <script type="text/javascript">
                      document.getElementById('imageGrid').innerHTML = '<img src="${fileName}" id="imageDetail">';
                  </script>
            </body>
        </html>
        `;
    }
}
