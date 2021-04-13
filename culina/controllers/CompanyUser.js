// Post Add a new user to :id company
exports.newCompanyUser = async function (
  { params: { id }, user: { admin, position, company }, body },
  res
) {
  const { ...rest } = body;
  const userFields = {
    ...rest
  };
  req.json(userFields);
  //if its not a admin must have a comp user
  try {
    //  if (admin || (!admin && position === "Manager" && company === id)) {
    //    const company = await Company.findOne({ _id: id });
    //    company.users.unshift(userFields);
    //    await company.save();
    //    req.json(company);
    // }
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
