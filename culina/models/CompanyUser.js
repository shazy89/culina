const mongoose = require("mongoose");

const CompanyUser = new mongoose.Schema({
  company: {
    type: mongoose.ObjectId
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: String,
  lastName: String,
  avatar: String,
  userType: String,
  salary: String,
  position: String,
  state: String,
  city: String,
  zipCode: String,
  birthday: String,
  gender: String,

  date: {
    type: Date,
    default: Date.now
  }
});
