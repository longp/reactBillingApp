var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MedicationSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: [true, 'Content required']
  },

  dosage: {
    type: String,
    default: '',
    trim: true,
    required: [true, 'Content required']

  },

  times: {
    type: String,
    default: '',
    trim: true,
    required: [true, 'Content required']
  },

  route: {
    type: String,
    default: 'oral',
    trim: true,
    required: [true, 'Content required']
  }
}

var Medication = mongoose.model('Medication', MedicationSchema);
module.exports = Medication;
