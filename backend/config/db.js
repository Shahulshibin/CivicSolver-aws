const mysql = require("mysql2")

const db = mysql.createConnection({

host: "YOUR_RDS_ENDPOINT",
user: "admin",
password: "YOUR_PASSWORD",
database: "civictrack"

})

db.connect((err)=>{

if(err){
console.log("Database connection error:",err)
}else{
console.log("Connected to AWS RDS")
}

})

module.exports = db