const Project = require("../models/Project");
const Company = require("../models/newCompany");
const normalizeData = require("../services/normalizeData");

// New Project  culina/companyId/project
exports.newProject = async function (
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
      const companyProject = await Company.findOne({ _id: companyId });
      const newProject = await new Project(projectFields);

      const companyProjectFields = {
        projectId: newProject._id,
        projectName: newProject.projectName,
        email: newProject.email,
        contactName: newProject.contactName
      };

      companyProject.projects.unshift(companyProjectFields);
      await newProject.save();
      await companyProject.save();

      // if (!project) res.json({ msg: "Something went wrong please try again" });

      res.json({ companyProject, newProject });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
// PUT
// edit the project
// culina/:companuId/project/edit
exports.editProject = async function (
  { params: { companyId }, user, body },
  res
) {
  const { _id, ...rest } = body;

  const projectFields = {
    companyId,
    ...rest
  };
  try {
    if (user.admin || (position === "Manager" && companyId === user.company)) {
      let companyProject = await Company.findOne({ _id: companyId });
      const project = await Project.findOneAndUpdate(
        { _id: _id }, // filter
        { $set: projectFields }, // update
        { new: true }
      );

      const companyProjectFields = {
        projectId: project._id,
        projectName: project.projectName,
        email: project.email,
        contactName: project.contactName
      };
      // add projects to the company
      if (companyProject.projects.length) {
        companyProject.projects = companyProject.projects.filter(
          (post) => post.projectId.toString() !== project._id.toString()
        );
        companyProject.projects.unshift(companyProjectFields);
        await companyProject.save();
        res.json({ companyProject, project });
      }
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
