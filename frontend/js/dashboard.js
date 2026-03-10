async function loadComplaints(){

const res = await fetch("http://localhost:5000/api/complaints")

const complaints = await res.json()

const container = document.getElementById("complaints")

let pending=0
let resolved=0

container.innerHTML=""

complaints.forEach(c=>{

if(c.status==="Pending") pending++
if(c.status==="Resolved") resolved++

container.innerHTML += `

<div class="complaint">

<h3>${c.title}</h3>

<p>${c.description}</p>

<p>${c.location}</p>

<span class="status ${c.status.toLowerCase()}">
${c.status}
</span>

<button onclick="updateStatus(${c.id})" class="btn">
Resolve
</button>

</div>

`

})

document.getElementById("total").innerText=complaints.length
document.getElementById("pending").innerText=pending
document.getElementById("resolved").innerText=resolved

}

loadComplaints()

/* MAP */

var map = L.map('map').setView([20.5937,78.9629],5)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:19
}).addTo(map)

async function loadMap(){

const res = await fetch("http://localhost:5000/api/complaints")

const complaints = await res.json()

complaints.forEach(c=>{

if(!c.location) return

const coords=c.location.split(",")

L.marker([coords[0],coords[1]]).addTo(map)
.bindPopup(c.title)

})

}

loadMap()

async function updateStatus(id){

await fetch(`http://localhost:5000/api/complaints/${id}`,{

method:"PUT"

})

location.reload()

}
