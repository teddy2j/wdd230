// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;

const today = Date.now();

let lastVisitDate = localStorage.getItem("lastVisit-ls") || 0;

let daysDif = (today - lastVisitDate) / msToDays;
daysDif = daysDif.toFixed(0);

const visitElement = document.getElementById("visitMessage");


if (lastVisitDate == 0) {
    visitElement.innerText = "Welcome! Let us know if you have any questions.";
}
else if (daysDif < 1) {
    visitElement.innerText = "Back so soon! Awesome!";
}

else if (daysDif == 1) {
    visitElement.innerText = `You last visited 1 day ago`;
}
else {
    visitElement.innerText = `You last visited ${daysDif} days ago`;
}


localStorage.setItem("lastVisit-ls", today);