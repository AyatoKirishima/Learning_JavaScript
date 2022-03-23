"use strict"

// Main Page
const citySelect = document.getElementById("city-select");
console.log(citySelect);

const generateEmptyOption = (text) => {
    return `<option value='null'>-- ${text} --</option>`;
};

const disableSelect = (element, disableText) => {
    element.innerHTML = generateEmptyOption(disableText);
    element.setAttribute("disabled", "true");
};

// console.log(LOCATIONS);


citySelect.innerHTML = generateEmptyOption("Sélectionnez une ville");
let result = LOCATIONS.map(f => f.city);
let max = result.length;
// console.log(max);
let select = document.querySelector("select[id='city-select']");

for (let i = 0; i < max; i++) {
    let opt = document.createElement('option');
    opt.value = result[i];
    opt.innerHTML = result[i];
    select.appendChild(opt);
}

let citySelected = LOCATIONS.filter(f => f.city == select.value);
let latitude = LOCATIONS.filter(f => f.latitude);
let longitude = LOCATIONS.filter(f => f.longitude);
console.log(select.value);
citySelected.onChange = update;


function update() {
    citySelected.disabled = true;

    let valuecityselected = LOCATIONS.filter(f => f.city == citySelected.value);
    // console.log(LOCATIONS.filter(f => f.city == citySelected.value));

    let latitude = valuecityselected.map(f => f.latitude);
    let longitude = valuecityselected.map(f => f.longitude);
    // console.log(latitude);
    // console.log(longitude);


    fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=Europe%2FParis").then(response => {
        return response.json();
    }).then(result => {
        console.log(result);

        nameCity = document.querySelector("h1");
        document.querySelector("h1").innerHTML = citySelected.value;

        currentTemp = document.querySelector("span[id='current-temp']");
        document.querySelector("span[id='current-temp']").innerHTML = result.current_weather.temperature;

        currentSunrise = document.querySelector("span[id='current-sunrise']");
        document.querySelector("span[id='current-sunrise']").innerHTML = result.daily.sunrise[0];

        currentSunset = document.querySelector("span[id='current-sunset']");
        document.querySelector("span[id='current-sunset']").innerHTML = result.daily.sunset[0];


        citySelected.disabled = false;
    })
}


const getWeather = async (city) => {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${$latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=Europe%2F${city}`
    );
    return await response.json();
};
// End Main Page


// Login funct
function login() {
    var element = document.getElementById("login-modal");
    element.style.display = null;
}

function closeLogin() {
    var element = document.getElementById("login-modal");
    element.style.display = "none";
}
// End Login funct