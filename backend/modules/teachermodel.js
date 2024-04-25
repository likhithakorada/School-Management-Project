const mongoose = require('../config/mongoose')

const teacherSchema = new mongoose.Schema({
  // Define your teacher schema fields here
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Add other fields as needed
});

const TeacherModel = mongoose.model('Teacher', teacherSchema);

module.exports = TeacherModel;
