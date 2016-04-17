var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var generator = require('./generator.js');

var Url = require('./models/url');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
	console.log(generator.generate());
});


var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
