var express = require('express'),
        app = express(),
port = 3000;

app
        .use(express.static('./public'))
        .get('*', function (req, res) {
            res.sendFile(__dirname + '/public/index.html');
        })
        .listen(port, function () {
            console.log('Server running at http://127.0.0.1:/'+port);
            console.log('To stop server press ctrl+c');
        });
