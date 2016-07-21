const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rateSchema = {
    rate: Number,
    service: String,
    billingCode: String,
    location: String
};


var rate = mongoose.model('rate', rateSchema,'rates');
module.exports = rate;