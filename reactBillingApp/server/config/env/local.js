'use strict';

// Rename this file to local.js for having a local configuration variables that
// will not get commited and pushed to remote repositories.
// Use it for your API keys, passwords, etc.

 For example:

module.exports = {
	db: {
		// //****
		// uri: 'mongodb://localhost/billing',
		// 		  options: {
		// 	user: '',
		// 	pass: ''
		// }
		//*****
		  uri: 'mongodb://groupproject:imaginary123@ds011775.mlab.com:11775/heroku_mrt8lrx2'
	}
	// facebook: {
	// 	clientID: process.env.FACEBOOK_ID || 'APP_ID',
	// 	clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
	// 	callbackURL: '/auth/facebook/callback'
	// }
};

//mongodb://groupproject:imaginary123@ds011775.mlab.com:11775/heroku_mrt8lrx2