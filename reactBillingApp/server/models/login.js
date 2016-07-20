var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = {

auth: { 
 type: String,
 default: '',  
 trim: true 
}, 

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var login = mongoose.model('login', loginSchema,'logins');
module.exports = login;
