const mongoose = require('mongoose');

// Define student schema
const studentSchema = new mongoose.Schema({
  email: String,
  password: String,
  // Add other fields as needed
});

// Create student model
const student = mongoose.model('Student', studentSchema);

module.exports = student; // Export the Student model
