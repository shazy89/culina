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
  console.log(userFields);
  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
