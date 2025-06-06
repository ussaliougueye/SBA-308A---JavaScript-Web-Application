let cityList = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Toronto",
  "Vancouver",
  "Montreal",
  "Calgary",
  "Ottawa",
  "Mexico City",
  "Guadalajara",
  "Monterrey",
  "Tijuana",
  "Cancún",
  "São Paulo",
  "Rio de Janeiro",
  "Buenos Aires",
  "Lima",
  "Bogotá",
  "Santiago",
  "Caracas",
  "Quito",
  "La Paz",
  "Montevideo",
  "London",
  "Paris",
  "Berlin",
  "Madrid",
  "Rome",
  "Amsterdam",
  "Brussels",
  "Vienna",
  "Copenhagen",
  "Stockholm",
  "Oslo",
  "Dublin",
  "Lisbon",
  "Warsaw",
  "Prague",
  "Zurich",
  "Athens",
  "Budapest",
  "Milan",
  "Munich",
  "Tokyo",
  "Osaka",
  "Seoul",
  "Beijing",
  "Shanghai",
  "Bangkok",
  "Singapore",
  "Kuala Lumpur",
  "Jakarta",
  "Manila",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Islamabad",
  "Karachi",
  "Kathmandu",
  "Hanoi",
  "Ho Chi Minh City",
  "Dhaka",
  "Dubai",
  "Abu Dhabi",
  "Riyadh",
  "Jeddah",
  "Tehran",
  "Istanbul",
  "Jerusalem",
  "Amman",
  "Baghdad",
  "Doha",
  "Cairo",
  "Lagos",
  "Nairobi",
  "Johannesburg",
  "Cape Town",
  "Casablanca",
  "Accra",
  "Addis Ababa",
  "Algiers",
  "Tunis",
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Auckland",
  "Wellington",
  "Christchurch",
  "Suva",
  "Port Moresby",
];
const lat = 37.7749;
const lon = -122.4194;
const apiKey = "6fa07ab67bd148ac92c173725250206";
let pickedCity = "";
window.onload = () => {
  cityList.forEach((city) => {
    const option = document.createElement("option");
    option.value =city;
    option.textContent = city;
    document.getElementById("cityy").appendChild(option);
  });
};

document.getElementById("cityy").addEventListener("change", (event) => {
  pickedCity = event.target.value;

  async function getWeather() {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${pickedCity}`;
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
    
  
      const cityElement = document.querySelector("#city");
      cityElement.textContent = data.location.name;
      const currentTime = document.querySelector("#date");
      currentTime.textContent = data.current.last_updated;
      const currentTemp = document.querySelector("#temp");
      currentTemp.textContent = data.current.temp_f + "°C";
      const currentHumidity = document.querySelector("p > span#humidity");
      currentHumidity.innerText = data.current.humidity + "--%";
      const currentWind = document.querySelector("p > span#wind");
      currentWind.innerText = data.current.wind_kph + "-- km/h";
  
      return data;
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  }
  
  getWeather(lat, lon, apiKey);
});








