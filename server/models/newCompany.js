const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const company = new Schema({
  name: {
    type: String,
  },
  adress: String,
  phone: String,
  email: String,
  timeZone: String,
  logo: String,
  date: { type: Date, default: Date.now },
  users: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  stores: [
    {
      store: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  vendors: [
    {
      vendor: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
});

module.exports = Company = mongoose.model("company", company);
