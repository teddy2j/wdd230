const windchill = document.getElementById("windchill");

const temperature = parseInt(document.getElementById("temperature").textContent);
const windspeed = parseInt(document.getElementById("windspeed").textContent);

if ((temperature <= 50) && (windspeed > 3)) {
    const result = 35.74 + 0.6215 * temperature - 35.75 * (windspeed ** 0.16) + 0.4275 * (windspeed ** 0.16);
    windchill.innerText = result.toFixed(2);
}
else {
    windchill.innerText = "N/A";
}

