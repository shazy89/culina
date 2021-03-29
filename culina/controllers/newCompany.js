const Company = require("../models/newCompany");
const mongoose = require("mongoose");

// Create Or Update
exports.newOrUpdate = async function (req, res) {
  const { name, adress, phone, email, timeZone, logo } = req.body;
  console.log(req);
  const companyFields = {};
  companyFields.name = name;
  if (email) companyFields.email = email;
  if (adress) companyFields.adress = adress;
  if (logo) companyFields.logo = logo;
  if (phone) companyFields.phone = phone;
  if (timeZone) companyFields.timeZone = timeZone;

  try {
    const findCompany = await Company.findOne({ name });
    // Remember to integrate Id check thats the only way you can make sure that this will work 100 %
    if (findCompany) {
      // Update
      company = await Company.findOneAndUpdate(
        { name: name }, // filter
        { $set: companyFields }, // update
        { new: true }
      );
      return res.json(company);
    }

    const companyNew = new Company(companyFields);

    await companyNew.save();

    res.json({ companyNew });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
