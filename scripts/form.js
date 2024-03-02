/*--------------------------Password Validation--------------------*/

const kp1 = document.querySelector("#password1");
const kp2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "show";
        kp2.style.backgroundColor = "#fff0f3";
        kp1.value = "";
        kp2.value = "";
        kp1.focus();
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
}

/*-------------------Range value display--------------------*/
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("pageRating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}