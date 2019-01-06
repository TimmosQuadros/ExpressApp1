const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

/**
 * A Validation function for local strategy email
 */
var validateEmail = function (email) {
    return validator.isEmail(email, { require_tld: false });
};

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, lowercase: true, trim: true, default: '', validate: [validateEmail, 'Please fill a valid email address']},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);