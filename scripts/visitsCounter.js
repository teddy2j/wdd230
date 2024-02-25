let visits = document.getElementById("visitsPlaceholder");
let count = Number(localStorage.getItem("visits-ls")) || 0;

if (count == 0) {
    visits.innerText = "This is your first visit"
}
else {
    visits.innerText = count;
}

count++;

localStorage.setItem("visits-ls", count);

