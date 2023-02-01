const jwt = require("jsonwebtoken");
const User = require("../models/user");

const { jwtSecret } = require("../config/index");

// user registration
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // create a new user
    const user = new User(req.body);
    // save user to database
    await user.save();
    res.status(201).send("User created successfully");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error, user not created");
  }
};

// user login
exports.login = async (req, res) => {
  try {
    // find user with the provided email
    const user = User.findOne({ email: req.body.email });
    // if user does not exist
    if (!user) {
      res.status(404).send("User not found");
    }
    // if user exists
    // compare user password with hashed password
    const isMatch = await user.comparePassword(req.body.password);
    // if password does not match
    if (!isMatch) {
      res.status(400).send("Invalid credentials");
    }
    // create a json web token
    const token = jwt.sign({ _id: user._id }, jwtSecret, { expiresIn: "1h" });
    // send token to client
    res.status(200).send({ token, user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
