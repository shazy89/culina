const Company = require("../models/newCompany");

exports.newCompany = async function (req, res) {
  const { name, adress, phone, email, timeZone, logo } = req.body;

  try {
    //  let findCompany = await Company.findOne({ name });

    //  if (findCompany) {
    //    return res.status(422).send({ error: "Email in use" });
    //  }
    const companyFields = {};
    companyFields.name = name;
    if (email) companyFields.email = email;
    if (adress) companyFields.adress = adress;
    if (logo) companyFields.logo = logo;
    if (phone) companyFields.phone = phone;
    if (timeZone) companyFields.timeZone = timeZone;

    const companyNew = new Company(companyFields);

    await companyNew.save();

    res.json({ companyNew });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
