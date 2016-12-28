
var express = require('express');
var app = express();
var PORT = 8080;
var request = require('request');

app.get('/', function (req, res) {
    res.send('Bélák Jenője, Jenők Gézája, Gézák Bélája, Bélák doksija!');
});

app.listen(PORT, function () {
    console.log('App is runing on port ' + PORT);
});