class currentWeather {
    constructor(data) {
        this.alerts = data.alerts;
        this.temp = data.currentConditions.temp;
        this.conditions = data.currentConditions.conditions;
        this.feelsLike = data.currentConditions.feelslike;
        this.humidity = data.currentConditions.humidity;
        this.precipitation = data.currentConditions.precipprob;
    }
}

class dayWeather {
    constructor(day) {
        this.date = day.datetime;
        this.min = day.tempmin;
        this.max = day.tempmax;
        this.temp = day.temp;
        this.feelsLike = day.feelslike;
        this.conditions = day.conditions;
        this.description = day.description;
        this.humidity = day.humidity;
        this.precipitation = day.precipprob;
    }
}

function processData(data) {
    const current = new currentWeather(data);
    const days = data.days.map(day => new dayWeather(day));
    return { current, days };
}

async function getWeather(city) {
    const apiKey = "LYM2U2BTHKLD8SSXVK2YJFM2Q";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
    const response = await fetch(url, {
        mode: 'cors'
    });
    const data = await response.json();
    return processData(data);
}

function renderAlert(alert) {
    return `
        <li class="alert">
            <h3>${alert.event}</h3>
            <p>${alert.headline}</p>
        </li>
    `;
}

function renderCurrent(current) {
    return `
        <div class="current">
            <h2>Current Weather</h2>
            <h3>${current.temp}°C</h3>
            <p>${current.conditions}</p>
            <p>Feels like ${current.feelsLike}°C</p>
            <p>Humidity: ${current.humidity}%</p>
            <p>Precipitation: ${current.precipitation}%</p>
        </div>
    `;
}

function renderDay(day) {
    return `
        <li class="day">
            <h3>${day.date}</h3>
            <p>${day.description}</p>
            <p>${day.temp}°C</p>
            <p>Feels like ${day.feelsLike}°C</p>
            <p>Humidity: ${day.humidity}%</p>
            <p>Precipitation: ${day.precipitation}%</p>
        </li>
    `;
}

function renderWeather(weather) {
    const alerts = weather.current.alerts.map(alert => renderAlert(alert)).join('');
    const current = renderCurrent(weather.current);
    const days = weather.days.map(day => renderDay(day)).join('');

    const weatherContainer = document.getElementById("weather");
    weatherContainer.style.display = "block";

    const currentWeatherContainer = document.getElementById("current-weather");
    currentWeatherContainer.innerHTML = current;

    const alertsContainer = document.getElementById("alert-list");
    alertsContainer.innerHTML = alerts;

    const forecastContainer = document.getElementById("forecast-list");
    forecastContainer.innerHTML = days;
}

const weatherForm = document.getElementById("weather-form");

weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = document.getElementById("city").value;
    const weather = await getWeather(city);
    renderWeather(weather);
});