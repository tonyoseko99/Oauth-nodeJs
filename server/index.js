require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

const { dbUrl } = require("./config/index");

// MongoDB connection
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Successfully working!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
