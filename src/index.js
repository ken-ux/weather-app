import "./style.css";

const temp_f = document.querySelector("#temp_f");
const temp_c = document.querySelector("#temp_c");
const condition = document.querySelector("#condition");

async function getWeatherData(location, days) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=4da9265abd484c518b043749233112&q=${location}&days=${days}`,
      { mode: "cors" }
    );
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    } else {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}

async function parseCurrentWeather(location, days) {
  const data = await getWeatherData(location, days);
  const obj = {};
  const fields = ["temp_f", "temp_c", "condition"];

  for (let i = 0; i < fields.length; i++) {
    obj[fields[i]] = data.current[fields[i]];
  }

  temp_f.textContent = obj.temp_f;
  temp_c.textContent = obj.temp_c;
  condition.textContent = obj.condition.text;

  console.log(obj);
}

async function parseForecastWeather(location, days) {
  const data = await getWeatherData(location, days);
  const obj = {};

  for (let i = 0; i < data.forecast.forecastday.length; i++) {
    const key = "day" + (i + 1);
    obj[key] = {};
    obj[key].date = data.forecast.forecastday[i].date;
  }
  console.log(obj);
}

getWeatherData("london", 3).then((result) => console.log(result));
parseCurrentWeather("london", 3);
parseForecastWeather("london", 3);
