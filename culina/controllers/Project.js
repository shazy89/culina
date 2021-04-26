const Project = require("../models/Project");
const normalizeData = require("../services/normalizeData");

// New Project  culina/companyId/project
exports.newOrUpdate = async function (
  { params: { company }, user, body },
  res
) {
  const { companyId, ...rest } = body;

  const userFields = {
    companyId: company,
    ...rest
  };

  try {
    //Note to do later if its not a company user cannot create a new project for this company!!
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
