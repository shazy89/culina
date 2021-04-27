const Project = require("../models/Project");
const Company = require("../models/newCompany");
const normalizeData = require("../services/normalizeData");

// New Project  culina/companyId/project
exports.newOrUpdate = async function (
  { params: { company }, user, body },
  res
) {
  const { companyId, ...rest } = body;

  const projectFields = {
    companyId: company,
    ...rest
  };

  try {
    //Note to do later if its not a company user cannot create a new project for this company!!
    if (user.admin || (position === "Manager" && company === user.company)) {
      const project = await Project.findOne({ _id });

      if (project) {
        const existingUser = await Project.findOneAndUpdate(
          { _id: _id }, // filter
          { $set: projectFields }, // update
          { new: true }
        );
        //return the updated user
        return res.json(existingUser);
      }
      const newProject = await new CompanyUser(userFields);
      const company = await Company.findOne({ _id: id });

      await newProject.save();

      const companyUserFields = await {
        userId: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        avatar: newUser.avatar,
        position: newUser.position
      };
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
