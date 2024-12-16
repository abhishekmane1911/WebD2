async function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'd00d8ea6d07af5560178c960f127734e'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Description: ${data.weather[0].description}</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}