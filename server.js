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