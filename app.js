var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var generator = require('./generator.js');
var config = require('./config');
var bodyParser = require('body-parser');
var Url = require('./models/url');

mongoose.connect('mongodb://' + config.db.host + '/' + config.db.name);
mongoose.connection.on('error', function(err) {
    console.error('MongoDB error: %s', err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/shorten', function(req, res){
  var longUrl = req.body.url;
  var shortUrl = '';

  Url.findOne({long_url: longUrl}, function (err, doc){
    if (doc){
      shortUrl = doc.short_url;
    }
    else {
	var unique = false;
  var verify;
	while(unique == false){
 		shortUrl = generator.generate();
		Url.findOne({short_url: shortUrl}, function (err, result){
      verify = result;
		});
    if(verify == null){
      unique = true;
	}
}
      var newUrl = Url({
        long_url: longUrl,
		    short_url: shortUrl
      });

      newUrl.save(function(err) {
        if (err){
          console.log(err);
        }
      });
    }
    res.send({'shortUrl': config.webhost + shortUrl});
    res.end();
  });
});

app.get('/:code', function(req, res){
  var code = req.params.code;

  Url.findOne({short_url: code}, function (err, doc){
    if (doc) {
      res.redirect("http://" + doc.long_url);
    } else {
      res.redirect(config.webhost);
    }
  });
});

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
