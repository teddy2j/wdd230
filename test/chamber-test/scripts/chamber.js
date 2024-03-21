document.getElementById("lastModified").innerHTML = `Last modification: ${document.lastModified}`

/* hamburguer menu */
const button = document.getElementById("menu");
const navigationBar = document.querySelector("nav");

button.addEventListener("click", () => { button.classList.toggle("open"); navigationBar.classList.toggle("open") });

/* dark mode */
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const menu = document.querySelector("#menu");


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        header.style.background = "var(--secondary-color)";
        header.style.color = "var(--primary-color)";
        footer.style.background = "var(--secondary-color)";
        footer.style.color = "var(--primary-color)";
        main.style.background = "#000";
        modeButton.textContent = "🔆";
        menu.style.background = "var(--secondary-color)";
        menu.style.color = "var(--primary-color)";

    } else {
        header.style.background = "var(--primary-color)";
        header.style.color = "var(--secondary-color)";
        footer.style.background = "var(--primary-color)";
        footer.style.color = "var(--secondary-color)";
        main.style.background = "#eee";
        modeButton.textContent = "🕶️";
        menu.style.background = "var(--primary-color)";
        menu.style.color = "var(--secondary-color)";
    }
});
