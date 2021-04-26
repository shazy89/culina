const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const company = new Schema({
  name: String,
  adress: String,
  phone: String,
  email: String,
  timeZone: String,
  logo: String,

  date: { type: Date, default: Date.now },
  users: [
    {
      userId: {
        type: Schema.Types.ObjectId
      },
      firstName: String,
      lastName: String,
      avatar: String
    }
  ],
  vendors: [
    {
      vendorId: Schema.Types.ObjectId,
      name: String,
      email: String
    }
  ],
  projets: [
    {
      projectId: Schema.Types.ObjectId,
      projectName: String,
      email: String,
      contactName: String
    }
  ]
});

module.exports = Company = mongoose.model("company", company);
