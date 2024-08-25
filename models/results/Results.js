const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultschema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"  
  },
  subject_name:{
    type: String,
    required: true
  },
  marks:{
    type: Number,
    required: true,
  },
  subject_type:{
    type: String,
    required: true,
    default: "general"
  },
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("results",resultschema)