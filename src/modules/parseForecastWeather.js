import { getWeatherData } from "./getWeatherData";
import { format } from "date-fns";

export async function parseForecastWeather(location, days) {
  const data = await getWeatherData(location, days);
  const obj = {};

  for (let i = 0; i < data.forecast.forecastday.length; i++) {
    const key = "day" + (i + 1);
    obj[key] = {};
    const dateString = data.forecast.forecastday[i].date;
    obj[key].date = format(dateString.replace(/-/g, "/"), "EEEE");
    obj[key].avgtemp_f = data.forecast.forecastday[i].day.avgtemp_f;
    obj[key].avgtemp_c = data.forecast.forecastday[i].day.avgtemp_c;
    obj[key].condition = data.forecast.forecastday[i].day.condition;
  }

  const weatherCards = document.querySelector("#weather-cards");
  for (const day in obj) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const tempF = document.createElement("p");
    tempF.classList = "temp shown";
    const tempC = document.createElement("p");
    tempC.classList = "temp hidden";
    const condition = document.createElement("p");
    const icon = document.createElement("img");

    h2.textContent = obj[day].date;
    tempF.textContent = obj[day].avgtemp_f + "°F";
    tempC.textContent = obj[day].avgtemp_c + "°C";
    condition.textContent = obj[day].condition.text;
    icon.src = obj[day].condition.icon;

    weatherCards.appendChild(div);
    div.appendChild(h2);
    div.appendChild(tempF);
    div.appendChild(tempC);
    div.appendChild(condition);
    div.appendChild(icon);
  }

  return obj;
}
