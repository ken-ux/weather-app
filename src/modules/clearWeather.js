export function clearWeather() {
  const weatherCards = document.querySelector("#weather-cards");
  while (weatherCards.hasChildNodes()) {
    weatherCards.removeChild(weatherCards.firstChild);
  }
}
