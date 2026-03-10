const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "civictrack-db.cxs86y4eiwti.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Admin1234",
  database: "civicsolverdb"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to AWS RDS");
  }
});

module.exports = db;