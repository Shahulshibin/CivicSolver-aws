const db = require("../config/db")

exports.createComplaint = (req,res)=>{

const {title,description,category,location} = req.body

const query = `
INSERT INTO complaints
(title,description,category,location)
VALUES (?,?,?,?)
`

db.query(query,[title,description,category,location],(err,result)=>{

if(err){
return res.status(500).json(err)
}

res.json({
message:"Complaint Submitted Successfully"
})

})

}

exports.getComplaints = (req,res)=>{

db.query("SELECT * FROM complaints",(err,result)=>{

if(err){
return res.status(500).json(err)
}

res.json(result)

})

}