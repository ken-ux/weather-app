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
  return obj;
}
