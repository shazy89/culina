const CompanyUser = require("../models/CompanyUser");
const Company = require("../models/newCompany");

// POST
// Post - new company user
// companies/:id/user/new
exports.newCompanyUser = async function (
  { params: { id }, user: { admin, position, company }, body },
  res
) {
  const { _id, ...rest } = body;

  const userFields = {
    company: id,
    ...rest
  };

  try {
    if (admin || (position === "Manager" && company === id)) {
      const newUser = await new CompanyUser(userFields);
      const company = await Company.findOne({ _id: id });

      const companyUserFields = {
        userId: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        avatar: newUser.avatar,
        position: newUser.position
      };

      company.users.unshift(companyUserFields);
      await company.save();
      await newUser.save();

      res.json({ newUser, company });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
// PUT
// edit the company user
// /companies/:id/user/edit
exports.editCompanyUSer = async function (
  { params: { id }, user: { admin, position, company }, body },
  res
) {
  const { _id, ...rest } = body;

  const userFields = {
    ...rest
  };
  try {
    if (admin || (position === "Manager" && company === id)) {
      const company = await Company.findOne({ _id: id });

      const existingUser = await CompanyUser.findOneAndUpdate(
        { _id: _id }, // filter
        { $set: userFields }, // update
        { new: true }
      );
      const companyUserFields = {
        userId: existingUser._id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        avatar: existingUser.avatar,
        position: existingUser.position
      };
      console.log(company);
      if (company.users.length) {
        company.users = company.users.filter(
          (user) => user.userId.toString() !== existingUser._id.toString()
        );
      }
      company.users.unshift(companyUserFields);

      await company.save();
      return res.json({ company, existingUser });
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

// Remove Company profile by id
exports.removeCompanyUser = async function (
  { params: { companyId, userId }, user: { admin, position, company }, body },
  res
) {
  try {
    // NOTE: only amin user can remove users and Manager user
    // Check if admin or manager
    if (!admin || (position !== "Manager" && company !== companyId)) {
      res.json({ msg: "You are not allowed to complete this task" });
    }

    await CompanyUser.findOneAndRemove({ _id: userId });
    const company = await Company.findById({ _id: companyId });

    if (!company) {
      return res.status(404).json({ msg: "Company does not exist" });
    }

    company.users = company.users.filter((user) => user.userId != userId);

    await company.save();

    res.json({ msg: "USER deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
