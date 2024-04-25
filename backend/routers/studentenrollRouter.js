// Import required modules
const express = require('express');
const multer = require('multer');
const path = require('path');
const Student = require('../modules/studentenrollmodel');

// Create an Express app instance
const app = express();

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Define the filename
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Define middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submission
app.post('/submit', upload.none(), async (req, res) => {
  try {
    // Extract form data from request body
    const {
      name, dateOfBirth, gender, address, phoneNumber, email,
      parentName, parentAddress, parentPhoneNumber, parentEmail,
      section
    } = req.body;

    // Create a new student document
    const student = new Student({
      name, dateOfBirth, gender, address, phoneNumber, email,
      parentName, parentAddress, parentPhoneNumber, parentEmail,
      section
    });

    // Save the student document to the database
    await student.save();

    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
