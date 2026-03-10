const db = require("./db")

db.run(`
CREATE TABLE IF NOT EXISTS complaints (

id INTEGER PRIMARY KEY AUTOINCREMENT,

title TEXT,

description TEXT,

location TEXT,

media TEXT,

status TEXT DEFAULT 'Pending',

created_at DATETIME DEFAULT CURRENT_TIMESTAMP

)
`)