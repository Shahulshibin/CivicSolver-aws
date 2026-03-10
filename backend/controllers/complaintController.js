const db = require("../config/db")

exports.createComplaint = (req,res)=>{

const {title,description,location} = req.body

let media = null

if(req.file){
media = req.file.filename
}

const sql = `
INSERT INTO complaints (title,description,location,media)
VALUES (?,?,?,?)
`

db.run(sql,[title,description,location,media],function(err){

if(err){
return res.status(500).json(err)
}

res.json({
message:"Complaint submitted",
id:this.lastID
})

})

}

exports.getComplaints = (req,res)=>{

db.all("SELECT * FROM complaints",(err,rows)=>{

if(err){
return res.status(500).json(err)
}

res.json(rows)

})

}