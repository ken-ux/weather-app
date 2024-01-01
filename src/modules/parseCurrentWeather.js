import { getWeatherData } from "./getWeatherData";

export async function parseCurrentWeather(location, days) {
  const data = await getWeatherData(location, days);
  const obj = {};
  const fields = ["temp_f", "temp_c", "condition"];

  for (let i = 0; i < fields.length; i++) {
    obj[fields[i]] = data.current[fields[i]];
  }

  const tempF = document.createElement("p");
  const tempC = document.createElement("p");
  const condition = document.createElement("p");
  const icon = document.createElement("img");


  tempF.textContent = obj.temp_f + "°F";
  tempC.textContent = obj.temp_c + "°C";
  condition.textContent = obj.condition.text;
  icon.src = obj.condition.icon;

  const currWeather = document.querySelector("#current-weather");
  currWeather.appendChild(tempF);
  currWeather.appendChild(tempC);
  currWeather.appendChild(condition);
  currWeather.appendChild(icon);

  return obj;
}
