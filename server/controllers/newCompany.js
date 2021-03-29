const Company = require("../models/newCompany");

// Create Or Update
exports.newOrUpdate = async function (req, res) {
  const { name, adress, phone, email, timeZone, logo } = req.body;
  const companyFields = {};
  companyFields.name = name;
  if (email) companyFields.email = email;
  if (adress) companyFields.adress = adress;
  if (logo) companyFields.logo = logo;
  if (phone) companyFields.phone = phone;
  if (timeZone) companyFields.timeZone = timeZone;

  try {
    const findCompany = await Company.findOne({ name });

    if (findCompany) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }

    const companyNew = new Company(companyFields);

    await companyNew.save();

    res.json({ companyNew });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
