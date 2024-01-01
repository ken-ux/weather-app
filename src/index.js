import "./style.css";
import { getWeatherData } from "./modules/getWeatherData";
import { parseCurrentWeather } from "./modules/parseCurrentWeather";
import { parseForecastWeather } from "./modules/parseForecastWeather";

getWeatherData("london", 3).then((result) => console.log(result));
parseCurrentWeather("london", 3).then((result) => console.log(result));
parseForecastWeather("london", 3).then((result) => console.log(result));
