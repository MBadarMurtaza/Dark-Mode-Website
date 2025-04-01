function changeMode() {
  let body = document.getElementById("body");
  let image = document.getElementById("image");

  if (body.classList.contains("dark-mode")) {
    // Switch to Light Mode
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    body.style.backgroundColor = "white";
    image.src = "/images/moon.png";
  } else {
    // Switch to Dark Mode
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    body.style.backgroundColor = "#010107";
    image.src = "/images/sun.png";
  }
}
