var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LocationSchema = {

  title: {
    type: String,
    default: '',
    trim: true,
    required: [true, 'Title required' ]
  },

  address: {
    type: String,
    default: '',
    trim: true,
    required: [true, 'Content required']

  },

  city: {
    type: String,
    required: [true, 'Content required']
  },

  state: {
    type: String,
    required: [true, 'Content required']
  }
}

var Location = mongoose.model('Location', LocationSchema, 'Locations');
module.exports = Location;
