function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let locationElement = document.querySelector("#location");
  locationElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "98c239163a7116dec4092fb1cdd1e807";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
