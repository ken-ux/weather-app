import { parseCurrentWeather } from "./parseCurrentWeather";
import { parseForecastWeather } from "./parseForecastWeather";
import { clearWeather } from "./clearWeather";

export async function submitLocation() {
  const form = document.querySelector("form");
  const formData = new FormData(form);
  const location = formData.get("location");

  const h1 = document.querySelector("h1");
  h1.textContent = "Weather Forecast: " + location;

  const button = document.querySelector("#switch-temp");
  button.textContent = "Change to °C";
  clearWeather();
  await parseCurrentWeather(location, 3);
  await parseForecastWeather(location, 3);
}
