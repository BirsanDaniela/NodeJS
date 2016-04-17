var characters = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ";
var size = characters.length;

function generate(){
  var shortUrl = '';
		for(i = 1; i <= 5; i++){
			rand = Math.floor(Math.random() * (size));
			shortUrl = shortUrl + characters[rand];
		}
  return shortUrl;
}

module.exports.generate = generate;
