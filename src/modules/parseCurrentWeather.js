import { getWeatherData } from "./getWeatherData";

export async function parseCurrentWeather(location, days) {
  const data = await getWeatherData(location, days);
  const obj = {};
  const fields = ["temp_f", "temp_c", "condition"];

  for (let i = 0; i < fields.length; i++) {
    obj[fields[i]] = data.current[fields[i]];
  }

  const weatherCards = document.querySelector("#weather-cards");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const tempF = document.createElement("p");
  tempF.classList = "temp shown";
  const tempC = document.createElement("p");
  tempC.classList = "temp hidden";
  const condition = document.createElement("p");
  const icon = document.createElement("img");

  h2.textContent = "Current";
  tempF.textContent = obj.temp_f + "°F";
  tempC.textContent = obj.temp_c + "°C";
  condition.textContent = obj.condition.text;
  icon.src = obj.condition.icon;

  weatherCards.appendChild(div);
  div.appendChild(h2);
  div.appendChild(tempF);
  div.appendChild(tempC);
  div.appendChild(condition);
  div.appendChild(icon);

  return obj;
}
