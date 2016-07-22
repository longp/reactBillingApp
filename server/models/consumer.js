var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ConsumerSchema = {
  firstname: {
   type: String,
   trim: true,
  },
  lastname: {
   type: String,
   trim: true,
  },
  dob: {
    type: Date,
  }
  created: {
    type: Date,
    default: Date.now
  }
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  medication: [{
    type: Schema.Types.ObjectId,
    ref: 'Medication'
  }],
  log:[{
    type: Schema.Types.ObjectId,
    ref: 'Log'
  }],
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  }

}

var Consumer = mongoose.model('Consumer', ConsumerSchema, 'Consumers');
module.exports = Consumer;
