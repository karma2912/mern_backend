const mongoose = require('mongoose');
const { Schema } = mongoose;

const Userschema = new Schema({
  subject_name:{
    type: String,
    required: true
  },
  marks:{
    type: Number,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("results",Userschema)