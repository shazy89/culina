const Project = require("../models/Project");
const Company = require("../models/newCompany");
const normalizeData = require("../services/normalizeData");

// New Project  culina/companyId/project
exports.newOrUpdate = async function (
  { params: { companyId }, user, body },
  res
) {
  const { _id, ...rest } = body;

  const projectFields = {
    companyId,
    ...rest
  };

  try {
    // Note to do later if its not a company user cannot create a new project for this company!!
    if (user.admin || (position === "Manager" && companyId === user.company)) {
      let companyProject = await Company.findOne({ _id: companyId });

      const project = await Project.findOneAndUpdate(
        { _id: _id }, // filter
        { $set: projectFields }, // update
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );

      //     const companyProjectFields = {
      //       projectId: existingProject._id,
      //       projectName: existingProject.projectName,
      //       email: existingProject.email,
      //       contactName: existingProject.contactName
      //     };

      res.json(project);
    }
    res.json({ msg: "You are not allowed to complete this task" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
