var express = require('express'),
        app = express();

app
        .use(express.static('./public'))
        .get('*', function(req, res) {
            res.sendFile(__dirname + '/public/index.html');
        })
        .listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
console.log('To stop server press ctrl+c');
