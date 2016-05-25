var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var clientSchema = new Schema({
  id: false,

  code: {
    type: String
  },

  browser_name: {
		type: String
	},

  browser_version: {
    type: String
  },

	so_name: {
		type: String
	},

  so_version:{
    type: String
  },

  date: {
		type: Date,
		default: Date.now
	},

  ip: {
    type: String
  },

  referrer: {
    type: String
  }
});


var Client = mongoose.model('Client', clientSchema);

module.exports = Client;
