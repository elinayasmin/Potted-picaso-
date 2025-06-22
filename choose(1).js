
document.querySelectorAll("input[name='plant']").forEach(radio => {
  radio.addEventListener("change", (e) => {
    const selected = e.target.value;
    let path = "";
    if (selected === "hanging") path = "images/hanging.png";
    else if (selected === "cactus") path = "images/cactus.png";
    else if (selected === "potted") path = "images/potted.png";
    sessionStorage.setItem("selectedPlant", path);
  });
});
