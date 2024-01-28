const hamburguerButtom = document.querySelector("#menu");
const navigationBar = document.querySelector("nav");

hamburguerButtom.addEventListener("click", () => { hamburguerButtom.classList.toggle("open"); navigationBar.classList.toggle("open") });
