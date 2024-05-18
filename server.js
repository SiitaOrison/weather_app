function fetchWeather() {
    const apiKey = '5616199c7bbef44ee89fb2c08da9f3e6'; // Provided OpenWeather API key
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        const weatherData = {
          weather: data.weather[0].main,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed
        };
        displayWeather(weatherData);
      })
      .catch(error => {
        alert(error.message);
        console.log('Error fetching data:', error);
      });
  }
  
  function displayWeather(weatherData) {
    const weatherDataDiv = document.getElementById('weatherData');
    weatherDataDiv.innerHTML = `
      <p>Weather: ${weatherData.weather}</p>
      <p>Temperature: ${weatherData.temperature}°C</p>
      <p>Humidity: ${weatherData.humidity}%</p>
      <p>Wind Speed: ${weatherData.windSpeed} m/s</p>
    `;
  }
  