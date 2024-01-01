import { getWeatherData } from "./getWeatherData";

const temp_f = document.querySelector("#temp_f");
const temp_c = document.querySelector("#temp_c");
const condition = document.querySelector("#condition");

export async function parseCurrentWeather(location, days) {
  const data = await getWeatherData(location, days);
  const obj = {};
  const fields = ["temp_f", "temp_c", "condition"];

  for (let i = 0; i < fields.length; i++) {
    obj[fields[i]] = data.current[fields[i]];
  }

  temp_f.textContent = obj.temp_f;
  temp_c.textContent = obj.temp_c;
  condition.textContent = obj.condition.text;

  return obj;
}
