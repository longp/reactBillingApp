var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var consumerSchema = {

firstname: { 
 type: String,
 default: '',  
 trim: true 
}, 
lastname: { 
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

var consumer = mongoose.model('consumer', consumerSchema,'consumers');
module.exports = consumer;
