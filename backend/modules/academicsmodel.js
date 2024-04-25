const mongoose = require('mongoose');

const academicsSchema = new mongoose.Schema({
  className: { type: String, required: true },
  gradeLevel: { type: String, required: true },
  section: { type: String, required: true },
  teacherAssigned: { type: String, required: true },
  timeTable: {
    days: [{ type: String }],
    timings: [{ type: String }]
  },
  studentId: { type: String, required: true },
  classId: { type: String, required: true },
  academicYear: { type: String, required: true },
  teacherName: { type: String, required: true },
  subjectExpertise: { type: String, required: true },
  contactInformation: { type: String, required: true }
});

module.exports = mongoose.model('Academics', academicsSchema);
