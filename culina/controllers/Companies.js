const Company = require("../models/newCompany");
const normalizeData = require("../services/normalizeData");

exports.newOrUpdate = async function (req, res) {
  const { name, adress, phone, email, timeZone, logo } = req.body;

  const companyFields = {};
  companyFields.name = name;
  if (email) companyFields.email = email;
  if (adress) companyFields.adress = adress;
  if (logo) companyFields.logo = logo;
  if (phone) {
    //format the mobileNumber
    companyFields.phone = normalizeData.normalizePhoneNumber(phone);
  }
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
    res.status(500).send({ error: "Server error" });
  }
};

//All companies
exports.allCompanies = async function (req, res) {
  console.log(req.user);
  try {
    const companies = await Company.find();

    res.json(companies);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

// Get Company profile by id
exports.companyProfile = async function ({ params: { id } }, res) {
  try {
    const company = await Company.findOne({ _id: id });

    if (!company) return res.status(400).json({ msg: "Company not found" });

    return res.json(company);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
// Remove Company profile by id
exports.removeCompany = async function ({ params: { id } }, res) {
  try {
    await Company.findOneAndRemove({ _id: id });
    res.json({ msg: "Comopany deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
