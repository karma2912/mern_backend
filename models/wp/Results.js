const mongoose = require('mongoose');
const { Schema } = mongoose;

const Userschema = new Schema({
  subject_name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    unique: true,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("results",Userschema)