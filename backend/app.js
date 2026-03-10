const express = require("express");
const path = require("path");
const multer = require("multer");
const db = require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// file upload setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "backend/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post("/complaint", upload.single("file"), (req, res) => {

  const { title, description, location } = req.body;

  const sql =
    "INSERT INTO complaints (title, description, location) VALUES (?, ?, ?)";

  db.query(sql, [title, description, location], (err, result) => {

    if (err) {
      console.error(err);
      res.status(500).send("Error submitting complaint");
    } else {
      res.send("Complaint submitted successfully");
    }

  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});