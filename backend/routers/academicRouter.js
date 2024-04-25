const express = require('express');
const app = express();
const Academics = require('../modules/academicsmodel');

app.post('/register', async (req, res) => {
  try {
    const {
      className,
      gradeLevel,
      section,
      teacherAssigned,
      timeTable,
      studentId,
      classId,
      academicYear,
      teacherName,
      subjectExpertise,
      contactInformation
    } = req.body;

    // Check if the academic record already exists
    const existingAcademic = await Academics.findOne({
      studentId: studentId,
      classId: classId,
      academicYear: academicYear
    });

    if (existingAcademic) {
      return res.status(400).send('Academic record already exists');
    }

    // Create a new academic record
    const newAcademic = new Academics({
      className: className,
      gradeLevel: gradeLevel,
      section: section,
      teacherAssigned: teacherAssigned,
      timeTable: timeTable,
      studentId: studentId,
      classId: classId,
      academicYear: academicYear,
      teacherName: teacherName,
      subjectExpertise: subjectExpertise,
      contactInformation: contactInformation
    });

    // Save the new academic record to the database
    await newAcademic.save();

    return res.status(200).send('Academic record registered successfully');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server Error');
  }
});

module.exports = app;

