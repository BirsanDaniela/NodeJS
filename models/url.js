var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
  _id: {
		type: Number,
		index: true
	},

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
	}

	image_url: {
		type: String,
		default: ''
	}
});

var Url = mongoose.model('Url', urlSchema);
