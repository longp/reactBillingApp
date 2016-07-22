var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LogSchema = {

  title: {
    type: String,
    default: '',
    trim: true,
    required: [true, 'Title required' ]
  },

  content: {
    type: String,
    default: '',
    trim: true,
    required: [true, 'Content required']

  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  consumer:{
    type: Schema.Types.ObjectId,
    ref: 'Consumer'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Log = mongoose.model('Log', LogSchema, 'Logs');
module.exports = Log;
