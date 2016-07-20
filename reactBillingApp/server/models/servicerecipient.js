const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceRecipientSchema = {
    firstName: String,
    lastName: String,
    ID: String,
    location: String
};


var serviceRecipient = mongoose.model('serviceRecipient', serviceRecipientSchema,'serviceRecipients');
module.exports = serviceRecipient;