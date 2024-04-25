// adminModel.js
const mongoose = require('../config/mongoose')


const adminSchema = new mongoose.Schema({
  // Define your admin schema fields here
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Add other fields as needed
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;
