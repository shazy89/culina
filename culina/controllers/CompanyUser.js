const CompanyUser = require("../models/CompanyUser");

// Post - Add a new user to :id company
exports.newCompanyUser = async function (
  { params: { id }, user: { admin, position, company }, body },
  res
) {
  const { ...rest } = body;

  const userFields = {
    company: id,
    ...rest
  };
  console.log(userFields);

  try {
    if (admin || (position === "Manager" && company === id)) {
      // TODO make sure you handle this on a bettr way
      // think of posible options that can crash the app
      const newUser = await new CompanyUser(userFields);
      const company = await Company.findOne({ _id: id });

      await newUser.save();

      const companyUserFields = await {
        userId: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        avatar: newUser.avatar,
        position: newUser.position
      };

      company.users.unshift(companyUserFields);
      await company.save();
      //return the updated company
      res.json(company);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get -- employee profile by :id
exports.companyUserById = async function (
  { params: { companyId, userId }, user: { admin, position, company }, body },
  res
) {
  try {
    if (admin || (position === "Manager" && company === companyId)) {
      const user = await CompanyUser.findOne({ _id: userId });
      if (!user) return res.status(400).json({ msg: "User not found" });
      return res.json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
