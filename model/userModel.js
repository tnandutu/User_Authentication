//import
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    address: String,
    phone: String,
    password: String,
    role: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User',userSchema);