document.getElementById("lastModified").innerHTML = `Last modification: ${document.lastModified}`

/* hamburguer menu */
const button = document.getElementById("menu");
const navigationBar = document.querySelector("nav");

button.addEventListener("click", () => { button.classList.toggle("open"); navigationBar.classList.toggle("open") });