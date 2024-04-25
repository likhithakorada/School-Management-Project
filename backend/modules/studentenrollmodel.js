// Import mongoose
const mongoose = require('mongoose');

// Define the student enrollment schema
const studentEnrollmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  parentName: { type: String, required: true },
  parentAddress: { type: String, required: true },
  parentPhoneNumber: { type: String, required: true },
  parentEmail: { type: String, required: true },
  gradeLevel: { type: Number, required: true },
  section: { type: String, required: true },
  previousSchool: { type: String },
  dateOfEnrollment: { type: Date, required: true },
});

// Create a model for the student enrollment schema
const StudentEnrollmentModel = mongoose.model('StudentEnrollment', studentEnrollmentSchema);

// Export the model
module.exports = StudentEnrollmentModel;
