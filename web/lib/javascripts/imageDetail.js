module.exports = {
    HTML:function(id){
        var fileName = `../images/${id}`;
        return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
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
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </body>
        </html>
        `;
    }
}
