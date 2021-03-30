require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/culinaAdmin");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req.header("authorization"));
  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in" });
  }
  // const token = authorization.replace("Bearer ", "");
  jwt.verify(authorization, process.env.JET_SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in" });
    }
    const { userId } = payload;
    console.log(userId);
    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};
