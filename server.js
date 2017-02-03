var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var request = require('request').defaults({ encoding: null });
var port = process.env.PORT || CONFIG.port;
app.listen(port);
