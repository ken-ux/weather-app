import { getWeatherData } from "./getWeatherData";

export async function parseForecastWeather(location, days) {
  const data = await getWeatherData(location, days);
  const obj = {};

  for (let i = 0; i < data.forecast.forecastday.length; i++) {
    const key = "day" + (i + 1);
    obj[key] = {};
    obj[key].date = data.forecast.forecastday[i].date;
    obj[key].avgtemp_f = data.forecast.forecastday[i].day.avgtemp_f;
    obj[key].avgtemp_c = data.forecast.forecastday[i].day.avgtemp_c;
    obj[key].condition = data.forecast.forecastday[i].day.condition.text;
  }

  const weatherCards = document.querySelector("#weather-cards");
  for (const day in obj) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const tempF = document.createElement("p");
    const tempC = document.createElement("p");
    const condition = document.createElement("p");

    h2.textContent = obj[day].date;
    tempF.textContent = obj[day].avgtemp_f + "°F";
    tempC.textContent = obj[day].avgtemp_c + "°C";
    condition.textContent = obj[day].condition;

    weatherCards.appendChild(div);
    div.appendChild(h2);
    div.appendChild(tempF);
    div.appendChild(tempC);
    div.appendChild(condition);
  }

  return obj;
}
