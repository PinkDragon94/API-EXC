// Import the necessary modules
import { fetchCountryData } from './api.js';
import { displayResult, displayError } from './ui.js';

// Main logic for handling user input and interacting with the API
let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value.trim();
  if (countryName) {
    fetchCountryData(countryName)
      .then((data) => displayResult(data))
      .catch((error) => displayError(error, countryName));
  } else {
    displayError('empty', countryName);
  }
});
