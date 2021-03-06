// Require Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Model
let userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);