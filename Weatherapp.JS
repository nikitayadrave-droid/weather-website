const apiKey = "9a2cbd2052f941d9b2054354250508";

function getWeather() {
  const city = document.getElementById("city-input").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=yes`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("city-name").textContent = `${data.location.name}, ${data.location.country}`;
      document.getElementById("temperature").textContent = data.current.temp_c;
      document.getElementById("condition").textContent = data.current.condition.text;
      document.getElementById("humidity").textContent = data.current.humidity;
      document.getElementById("wind-speed").textContent = data.current.wind_kph;
      document.getElementById("weather-icon").src = `https:${data.current.condition.icon}`;
      document.getElementById("weather-box").classList.remove("hidden");
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
}
