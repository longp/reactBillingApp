var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicationSchema = {

times: { 
 type: String,
 default: '',  
 trim: true 
}, 

  frequency: {
    type: String
  },
  drugname: {
    type: String
  },
  dosage: {
    type: String
  },
  route: {
    type: String
  },
  times: {
    type: String
  }
}

var medication = mongoose.model('medication', medicationSchema,'medications');
module.exports = medication;
