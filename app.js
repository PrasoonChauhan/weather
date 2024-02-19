const APIurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const APIkey = "&appid=fda53f62d05085ef13fdb39a5bc7ae31";

const tempElement = document.querySelector(".temp");
const minTempElement = document.querySelector(".minTemp");
const maxTempElement = document.querySelector(".maxTemp");
const pressureElement = document.querySelector(".pressure");
const humidityElement = document.querySelector(".humidity");
const windSpeedElement = document.querySelector(".windSpeed");
const windDegreeElement = document.querySelector(".windDegree");
const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("input");
const cityHeading = document.querySelector("h1");

async function fetchData(city) {
  const response = await fetch(APIurl + city + APIkey);
  const data = await response.json();
  console.log(data);
  forecast(data);

  // console.log(data.main.temp);
}
function forecast(data) {
  let temperature = data.main.temp;
  let minTemperature = data.main.temp_min;
  let maxTemperature = data.main.temp_max;
  let pressure = data.main.pressure;
  let humidity = data.main.humidity;
  let windSpeed = data.wind.speed;
  let windDegree = data.wind.deg;
  tempElement.innerHTML = `Temperature = ${temperature} K`;
  minTempElement.innerHTML = `Minimum Temperature = ${minTemperature} K`;
  maxTempElement.innerHTML = `Maximum Temperature = ${maxTemperature} K`;
  pressureElement.innerHTML = `Pressure = ${pressure} hpa`;
  humidityElement.innerHTML = `Humidity = ${humidity} %`;
  windSpeedElement.innerHTML = `Windspeed = ${windSpeed} m/s`;
  windDegreeElement.innerHTML = `Wind degree = ${windDegree}°`;
}
buttonElement.addEventListener("click",() => {
   
  if (inputElement.value == null || inputElement.value == "") {
    alert("Enter City Name");
  } 
  else {
    let cityName = inputElement.value;
    cityHeading.innerHTML = `${cityName}`
    fetchData(cityName);
  }
});
// fetchData("delhi");
