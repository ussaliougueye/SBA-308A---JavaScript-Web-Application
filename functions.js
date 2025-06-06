import { cityList } from './variables.js';
export function populateCityList() {
  cityList.forEach(function (city) {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    document.getElementById("cityy").appendChild(option);
  });
}
