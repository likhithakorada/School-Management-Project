const mongoose = require('../config/mongoose')
const parentSchema = new mongoose.Schema({

  email: { type: String, required: true },
  password: { type: String, required: true },
  
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
