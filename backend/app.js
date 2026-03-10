const db = require("./db");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("CivicSolver Backend API Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("CivicSolver Backend Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});