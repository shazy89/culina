const CompanyUser = require("../models/CompanyUser");
const Company = require("../models/newCompany");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  normalizePhoneNumber,
  formatSalary: {
    formatAnnualSalary,
    formatMonthlyWage,
    formatWeeklyWage,
    formatDailyWage,
    formatHrWage
  }
} = require("../services/normalizeData");

require("dotenv").config();

// POST
// Post - new company user
// companies/:id/newuser -- Sign Up
exports.newCompanyUser = async function (
  { params: { companyId }, user: { admin, position, company }, body },
  res
) {
  const { _id, email, password, annualSalary, ...rest } = body;

  const userFields = {
    company: companyId,
    email,
    password,
    annualSalary: formatAnnualSalary(annualSalary),
    monthlyWage: formatMonthlyWage(annualSalary),
    weeklyWage: formatWeeklyWage(annualSalary),
    dailyWage: formatDailyWage(annualSalary),
    hourlyWage: formatHrWage(annualSalary),
    ...rest
  };
  res.json(userFields);
};
// Sign in
exports.signInCompanyUser = async function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "Must provide email and password" });
  }
  const user = await CompanyUser.findOne({ email: email });
  if (!user) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
  try {
    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JET_SECRET);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email" });
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

/*
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide valid email and password" });
  }
  res.json(userFields);
  try {
    if (admin || (position === "Manager" && company === id)) {
      const existingUser = await CompanyUser.findOne({ email });
      if (existingUser) {
        return res.status(422).send({ error: "Email is in use" });
      }
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

      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);

      // const token = jwt.sign({ userId: newUser.id }, process.env.JET_SECRET);
      res.json({ newUser, company });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }



*/
