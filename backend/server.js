const express = require('express');
const devuser = require('./modules/devusermodel');
const student = require('./modules/studentmodel')
const admin = require('./modules/adminmodel');
const teacherModel = require('./modules/teachermodel');
const Parent = require('./modules/parentmodel');
const app = express();
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');
const cors = require('cors');
const studentenrollRouter =  require ("./routers/studentenrollRouter");
const academicRouter = require("./routers/academicRouter")

// Middleware to parse URL-encoded bodies
app.use(express.json());
app.use(cors({origin:'*'}));


app.get('/', (req,res) =>{
     return res.send('Hello world')
})

app.post('/register', async (req,res) => {
  try{
       const {fullname,email,mobile,password,confirmpassword} = req.body;
       const exist = await devuser.findOne({email});
       if(exist) {
        return res.status(400).send('User Already Registered')
       }
       if(password != confirmpassword) {
          return res.status(403).send('Password Invalid');
       }
       let newUser = new devuser({
        fullname,email,mobile,password,confirmpassword
       })
       newUser.save();
       return res.status(200).send('User Registered');
  }
  catch(err){
    console.log(err);
    return res.status(500).send('Server Error')
  }
})
app.post('/login/:student', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user with the provided email already exists
    const exist = await student.findOne({ email });
    if (exist) {
      return res.status(400).send('User Already Registered');
    }

    // Create a new student with the provided email and password
    const newStudent = new student({ email, password});
    await newStudent.save();

    return res.status(200).send('User Registered');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
});

app.post('/login/:admin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin with the provided email already exists
    const exist = await admin.findOne({ email });
    if (exist) {
      return res.status(400).send('Admin Already Registered');
    }

    // Create a new admin with the provided email and password
    const newAdmin = new admin({ email, password });
    await newAdmin.save();

    return res.status(200).send('Admin Registered');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
});

app.post('/login/:parent', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if parent with the provided email already exists
    const exist = await Parent.findOne({ email });
    if (exist) {
      return res.status(400).send('Parent Already Registered');
    }

    // Create a new parent with the provided email and password
    const newParent = new Parent({ email, password });
    await newParent.save();

    return res.status(200).send('Parent Registered');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
});

app.post('/login/:teacher', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if teacher with the provided email already exists
    const exist = await teacherModel.findOne({ email });
    if (exist) {
      return res.status(400).send('Teacher Already Registered');
    }

    // Create a new teacher with the provided email and password
    const newTeacher = new teacherModel({ email, password });
    await newTeacher.save();

    return res.status(200).send('Teacher Registered');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
});

app.listen(5000,() =>{
  console.log('Server Running 5000!!!')  
})

