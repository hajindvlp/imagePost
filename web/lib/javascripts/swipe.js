<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Image Swipe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
        <div id = "image" onclick = "swipe()">
            rendering ...
        </div>

        <script type="text/javascript">
            var imageName = Math.floor(Math.random()*1000);
            var fileName = 'images/'+imageName.toString()+'.png';

            document.getElementById('image').innerHTML = `<img src=${fileName}>`;

            function swipe() {
                imageName = Math.floor(Math.random()*1000);
                fileName = 'images/'+imageName.toString()+'.png';
                console.log(imageName);
                document.getElementById('image').innerHTML = `<img src=${fileName}>`;
            }
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
</html>
