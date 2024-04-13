const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector('#forecastWeather');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=-2.19&lon=-79.90&units=imperial&appid=146a25c754648df720367b60e1f0ca25";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${parseInt(data.list[0].main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;


    // Building the forecast... I start with "8" because that's the corresponding index for "tomorrow"
    for (let i = 8; i <= 24; i += 8) {
        //creating elements
        const newDay = document.createElement("div");
        const dateElement = document.createElement("p");
        const temp = document.createElement("p");
        const pic = document.createElement("img");
        const descrip = document.createElement("p");

        //creating elements' content
        const timespan = data.list[i].dt * 1000; //i have to convert seconds to miliseconds. "data" provides seconds. 
        const date = new Date(timespan);
        const dateString = date.toDateString();
        dateElement.innerText = dateString;

        temp.innerHTML = `Temperature: ${data.list[i].main.temp}&deg;F`;

        pic.setAttribute("src", `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`)

        descrip.innerText = data.list[i].weather[0].description;

        //appending
        newDay.appendChild(dateElement);
        newDay.appendChild(temp);
        newDay.appendChild(pic);
        newDay.appendChild(descrip);

        forecast.appendChild(newDay);



    }
}