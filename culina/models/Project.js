const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  state: String,
  city: String,
  address: String,
  zipCode: String,
  startDate: Date,
  deadLine: Date,
  completed: Date,
  contract: String,
  email: String,
  contactName: String,
  contactCompanyName: String,
  contactNumber: String
});

module.exports = ProjectSchema = mongoose.model("project", projectSchema);
