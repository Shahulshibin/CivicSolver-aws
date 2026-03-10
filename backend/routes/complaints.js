const express = require("express")
const router = express.Router()

const controller = require("../controllers/complaintController")
const upload = require("../middleware/upload")

// GET all complaints
router.get("/complaints", controller.getComplaints)

// POST new complaint
router.post("/complaints", upload.single("file"), controller.createComplaint)

module.exports = router

router.get("/clear", (req,res)=>{

const db = require("../config/db")

db.run("DELETE FROM complaints", function(err){

if(err){
return res.status(500).json(err)
}

res.json({message:"All complaints cleared"})

})

})