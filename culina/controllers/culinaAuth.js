const User = require("../models/culinaAdmin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

//Sign up
exports.culinaSignup = async function (req, res) {
  const {
    email,
    password,
    name,
    lastName,
    mobileNumber,
    salary,
    position,
  } = req.body;

  const userFields = {};
  userFields.name = name;
  userFields.email = email;
  userFields.password = password;
  if (lastName) userFields.lastName = lastName;
  if (mobileNumber) userFields.mobileNumber = mobileNumber;
  if (salary) userFields.salary = salary;
  if (position) userFields.position = position;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide valid email and password" });
  }
  try {
    // See if a user with the given email exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    const newUser = new User(userFields);

    await newUser.save();

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    const token = jwt.sign({ userId: newUser.id }, process.env.JET_SECRET);
    res.send({ token });
  } catch (err) {
    console.error(err.message);
    return res.status(422).send({ error: "Invalid password or email" });
  }
};

//Sign in
exports.culinaSignin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "Must provide email and password" });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
  try {
    const ismatch = await bcrypt.compare(password, user.password);

    if (!ismatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JET_SECRET);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
};
