'use strict';
require("babel-register");
var config = require('./config/config.js');
var mongoose = require ('mongoose');
var express = require ('express');
// Import database
// mongorestore -h ds011775.mlab.com:11775 -d heroku_mrt8lrx2 -u <user> -p <password> <input db directory>


var uri = process.env.MONGOLAB_URI || config.db.uri;
var db = mongoose.connect(uri,function(){
	require('./seeds.js');
});

require('./models/Article.js');
require('./models/User.js');
require('./models/location.js');
require('./models/servicerecipient.js');
require('./models/rate.js');
require('./models/medication.js');
var app = require('./express.js')(db);

// Bootstrap passport config
require('./passport')();

app.listen(app.get('port'), function(){
})

module.exports = app;
