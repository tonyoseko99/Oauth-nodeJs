const express = require("express");
const app = express();
const mongoose = require("mongoose");

// create a schema
const userSchema = new mongoose.Schema({
  username: String,
  required: true,
  email: String,
  required: true,
  password: String,
  required: true,
});

// create a model
const User = mongoose.model("User", userSchema);

// export the model
module.exports = User;
