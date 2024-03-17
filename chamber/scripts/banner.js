const banner = document.getElementById("banner");
const closeBannerButton = document.getElementById("closeBanner");

closeBannerButton.addEventListener("click", function () {
    banner.style.display = "none";
})

const today = new Date().getDay();
if (today >= 1 && today <= 3) {
    banner.style.display = "block";
}
