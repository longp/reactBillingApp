const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = {
    city: String,
    state: String,
    address: String
};


var Location = mongoose.model('location', locationSchema,'locations');
module.exports = Location;