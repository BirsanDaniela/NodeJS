var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var urlSchema = new Schema({
  id: false,

  long_url: {
		type: String,
    required: 'Enter url'
	},

  short_url: {
		type: String,
		default: ''
	},

  created_at: {
		type: Date,
		default: Date.now
	},

  image_url: {
		type: String,
		default: ''
	},

  title: {
		type: String,
		default: ''
	}
});


var Url = mongoose.model('Url', urlSchema);

module.exports = Url;
