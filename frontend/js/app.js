// DARK / LIGHT MODE

function toggleMode(){

document.body.classList.toggle("light")

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light")

}else{

localStorage.setItem("theme","dark")

}

}


// LOAD SAVED THEME

window.addEventListener("load", ()=>{

const savedTheme = localStorage.getItem("theme")

if(savedTheme === "light"){

document.body.classList.add("light")

}

animateStats()

})


// ANIMATE STATS COUNTERS

function animateStats(){

const stats = document.querySelectorAll(".stat-card h3")

stats.forEach(stat =>{

let target = parseInt(stat.innerText)

let count = 0

let speed = target / 50

function update(){

count += speed

if(count < target){

stat.innerText = Math.floor(count) + "+"

requestAnimationFrame(update)

}else{

stat.innerText = target + "+"

}

}

update()

})

}


// MOBILE NAV (future expansion)

function toggleMenu(){

document.querySelector(".nav-links").classList.toggle("active")

}


// SIMPLE ALERT SYSTEM

function showMessage(msg){

alert(msg)

}


// FETCH COMPLAINTS (dashboard will use this later)

async function loadComplaints(){

try{

const res = await fetch("http://localhost:5000/api/complaints")

const data = await res.json()

renderComplaints(data)

}catch(err){

console.log("API error",err)

}

}


// RENDER COMPLAINTS (dashboard)

function renderComplaints(list){

const container = document.getElementById("complaints")

if(!container) return

container.innerHTML=""

if(list.length === 0){

container.innerHTML = "<p>No complaints reported yet.</p>"

return

}

list.forEach(c =>{

const card = document.createElement("div")

card.className = "complaint"

card.innerHTML = `

<h3>${c.title}</h3>

<p>${c.description}</p>

<p><strong>Location:</strong> ${c.location}</p>

<p><strong>Status:</strong> ${c.status}</p>

${c.media ? `<img src="http://localhost:5000/uploads/${c.media}">` : ""}

`

container.appendChild(card)

})

}
document.getElementById("complaintForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;

  const response = await fetch("/complaint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, description, location })
  });

  const result = await response.text();
  alert(result);
});
navigator.geolocation.getCurrentPosition(function(position) {

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  document.getElementById("location").value = lat + "," + lon;

});