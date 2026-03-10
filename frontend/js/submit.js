function detectLocation() {

  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      document.getElementById("location").value = lat + "," + lon;

    },
    () => {
      alert("Unable to get location");
    }
  );
}

document.getElementById("complaintForm").addEventListener("submit", async function (e) {

  e.preventDefault();

  const formData = new FormData();

  formData.append("title", document.getElementById("title").value);
  formData.append("description", document.getElementById("description").value);
  formData.append("location", document.getElementById("location").value);

  const file = document.getElementById("file").files[0];
  if (file) formData.append("file", file);

  try {

    const response = await fetch("/complaint", {
      method: "POST",
      body: formData
    });

    const text = await response.text();

    alert(text);

  } catch (err) {

    alert("Error submitting complaint");

  }

});