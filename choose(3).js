let waterLevel = 0;

// Load plant image and name from previous page
window.addEventListener("DOMContentLoaded", () => {
  const imgPath = sessionStorage.getItem("selectedPlant");
  const plantName = sessionStorage.getItem("plantName");

  if (imgPath) document.getElementById("plant-image").src = imgPath;
  if (plantName) document.getElementById("plant-name").textContent = plantName;
});

function waterPlant() {
  if (waterLevel < 100) {
    waterLevel += 10;
    document.getElementById("status-fill").style.height = `${waterLevel}%`;
  }

  const plant = document.getElementById("plant-image");

  // Add the 'wiggle' class
  plant.classList.add("wiggle");

  // Remove it after animation completes so it can repeat later
  setTimeout(() => {
    plant.classList.remove("wiggle");
  }, 800);
}

function petPlant() {
  const plant = document.getElementById("plant-image");
  const container = document.querySelector(".content");

  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.textContent = "💖";

    // Random X position around the plant
    heart.style.left = `${Math.random() * 60 + 20}%`;
    heart.style.top = `${Math.random() * 40 + 30}%`;

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}
