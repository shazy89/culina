const User = require("../models/culinaAdmin");
const jwt = require("jsonwebtoken");
//const bcrypt = require("bcryptjs");
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

    // const salt = await bcrypt.genSalt(10);
    // newUser.password = await bcrypt.hash(password, salt);

    const payload = {
      user: {
        id: newUser.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JET_SECRET,
      { expiresIn: 10060000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }

  // If a user with email does exits, return error
  //if a user with email does not exist, create and save user record
  //Respond to request indicating the user was created
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
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, process.env.MY_SECRET_KEY);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
};
