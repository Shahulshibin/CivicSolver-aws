const express = require("express")
const cors = require("cors")

require("./backend/config/initDB")

const complaintRoutes = require("./backend/routes/complaints")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/uploads", express.static("backend/uploads"))

app.use("/api", complaintRoutes)

app.get("/", (req,res)=>{
res.send("CivicTrack API Running")
})

app.listen(5000, ()=>{
console.log("Server running on port 5000")
})