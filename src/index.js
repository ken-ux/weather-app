import "./style.css";
import { parseCurrentWeather } from "./modules/parseCurrentWeather";
import { parseForecastWeather } from "./modules/parseForecastWeather";
import { switchTemp } from "./modules/switchTemp";
import { clearWeather } from "./modules/clearWeather";

parseCurrentWeather("london", 3);
parseForecastWeather("london", 3);

const button = document.querySelector("#switch-temp");
button.textContent = "Change to °C";
button.addEventListener("click", switchTemp);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearWeather();
});
