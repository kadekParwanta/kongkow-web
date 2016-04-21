var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 5000

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(port);
console.log("express server running on port " + port);