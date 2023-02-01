require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/user");

// middlewares
app.use(bodyParser.json());
app.use(cors());

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

// route middlewares
app.use("/auth", userRoutes);

// listen to port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
