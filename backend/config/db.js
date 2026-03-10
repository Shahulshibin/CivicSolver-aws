const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "civictrack-db.cxs86y4eiwti.ap-south-1.rds.amazonaws.com ",
  user: "admin",
  password: "YOURPASSWORD",
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

const sqlite3 = require("sqlite3").verbose()
const path = require("path")

const dbPath = path.join(__dirname, "../database/civictrack.db")

const db = new sqlite3.Database(dbPath, (err) => {

if(err){
console.error("Database error:", err.message)
}
else{
console.log("Connected to SQLite database")
}

})

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "civictrack-db.cxs86y4eiwti.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Admin1234",
  database: "civicsolver-db"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to AWS RDS");
  }
});

module.exports = db;