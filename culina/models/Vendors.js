const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  companyId: Schema.Types.ObjectId,
  vendorName: {
    type: String,
    required: true
  },
  state: String,
  city: String,
  address: String,
  zipCode: String,
  startDate: Date,
  contract: String,
  email: String,
  contactName: String,
  contactCompanyName: String,
  contactNumber: String
});

module.exports = VendorSchema = mongoose.model("vendor", vendorSchema);
