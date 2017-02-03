var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var request = require('request').defaults({ encoding: null });
var port = process.env.PORT || CONFIG.port;
app.listen(port);

var whitelist = ['https://www.dronedeploy.com'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted)
  }
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());