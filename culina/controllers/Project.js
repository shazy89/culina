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
    //Note to do later if its not a company user cannot create a new project for this company!!
    if (user.admin || (position === "Manager" && companyId === user.company)) {
      const project = await Project.findOne({ _id });
      const companyProject = await Company.findOne({ _id: companyId });

      if (project) {
        const existingUser = await Project.findOneAndUpdate(
          { _id: _id }, // filter
          { $set: projectFields }, // update
          { new: true }
        );

        //return the updated user
        return res.json(existingUser);
      }
      const newProject = await new Project(projectFields);

      await newProject.save();

      const companyProjectFields = {
        projectId: newProject._id,
        projectName: newProject.projectName,
        email: newProject.email,
        contactName: newProject.contactName
      };

      companyProject.projects.unshift(companyProjectFields);
      await companyProject.save();
      //return the updated company Note decide what should be the return
      res.json(companyProject);
    }
    res.json({ msg: "You are not allowed to complete this task" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
