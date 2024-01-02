import { getWeatherData } from "./getWeatherData";
import { parseCurrentWeather } from "./parseCurrentWeather";
import { parseForecastWeather } from "./parseForecastWeather";
import { clearWeather } from "./clearWeather";

export async function submitLocation() {
  const form = document.querySelector("form");
  const formData = new FormData(form);
  const location = formData.get("location");

  getWeatherData(location).then(async (result) => {
    if (result) {
      const button = document.querySelector("#switch-temp");
      button.textContent = "Change to °C";
      clearWeather();
      await parseCurrentWeather(location, 3);
      await parseForecastWeather(location, 3);
    }
  });
}
