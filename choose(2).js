// Retrieve selected image from sessionStorage and display it
window.addEventListener("DOMContentLoaded", () => {
  const imgPath = sessionStorage.getItem("selectedPlant");
  if (imgPath) {
    document.getElementById("selected-plant").src = imgPath;
  }
});

function confirmName() {
  const name = document.getElementById("plant-name").value.trim();
  if (name) {
    const confirmed = confirm(`Are you sure you want to name your plant "${name}"?`);
    if (confirmed) {
      alert(`Sweet! Your plant "${name}" is ready to grow 🌱`);
       sessionStorage.setItem("plantName", name);


       function confirmName() {
  const name = document.getElementById("plant-name").value.trim();
  if (name) {
    const confirmed = confirm(`Are you sure you want to name your plant "${name}"?`);
    if (confirmed) {
      sessionStorage.setItem("plantName", name);

      // 🌱 Save plant data to localStorage
      const plants = JSON.parse(localStorage.getItem("myPlants")) || [];
      plants.push({
        name: name,
        status: 0, // starting status
        image: sessionStorage.getItem("selectedPlant")
      });
      localStorage.setItem("myPlants", JSON.stringify(plants));

      window.location.href = "choose(3).html";
    }
  } else {
    alert("Please enter a name for your plant 🌼");
  }
}

      window.location.href = "choose(3).html";
    }
  } else {
    alert("Please enter a name for your plant 🌼");
  }
}
