export async function getWeatherData(location, days) {
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
