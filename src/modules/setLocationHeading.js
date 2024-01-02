export function setLocationHeading(data) {
  const location = data.location.name;
  const region = data.location.region;
  const h1 = document.querySelector("h1");
  h1.textContent = `Weather Forecast: ${location}, ${region}`;
}
