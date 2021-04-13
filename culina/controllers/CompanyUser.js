const CompanyUser = require("../models/CompanyUser");
// Post Add a new user to :id company
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
    if (admin || (!admin && position === "Manager" && company === id)) {
      const newUser = await new CompanyUser(userFields);
      const company = await Company.findOne({ _id: id });

      await newUser.save();

      const companyUserFields = await {
        userId: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        avatar: newUser.avatar
      };

      company.users.unshift(companyUserFields);
      await company.save();
      res.json([newUser, company]);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
