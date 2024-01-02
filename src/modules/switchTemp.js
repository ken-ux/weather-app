export function switchTemp() {
  const button = document.querySelector("#switch-temp");
  if (button.textContent === "Change to °C") {
    button.textContent = "Change to °F";
  } else {
    button.textContent = "Change to °C";
  }

  const hiddenTemps = document.querySelectorAll(".temp.hidden");
  const shownTemps = document.querySelectorAll(".temp.shown");
  hiddenTemps.forEach((temp) => (temp.classList = "temp shown"));
  shownTemps.forEach((temp) => (temp.classList = "temp hidden"));
}
