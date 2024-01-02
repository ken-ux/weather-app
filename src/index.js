import "./style.css";
import { getWeatherData } from "./modules/getWeatherData";
import { parseCurrentWeather } from "./modules/parseCurrentWeather";
import { parseForecastWeather } from "./modules/parseForecastWeather";
import { switchTemp } from "./modules/switchTemp";

getWeatherData("london", 3).then((result) => console.log(result));
parseCurrentWeather("london", 3).then((result) => console.log(result));
parseForecastWeather("london", 3).then((result) => console.log(result));

const button = document.querySelector("#switch-temp");
button.textContent = "Change to °C";
button.addEventListener("click", switchTemp);
