require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from Shopping Service" });
});

app.listen(8003, () => {
  console.log("Shopping Service is running on port 8003");
});
