// Function to display the fetched data in the UI
export const displayResult = (data) => {
    const result = document.getElementById("result");
    result.innerHTML = `
      <img src="${data.flags.svg}" class="flag-img">
      <h2>${data.name.common}</h2>
      <div class="wrapper">
          <div class="data-wrapper">
              <h4>Capital:</h4>
              <span>${data.capital[0]}</span>
          </div>
      </div>
      <div class="wrapper">
          <div class="data-wrapper">
              <h4>Continent:</h4>
              <span>${data.continents[0]}</span>
          </div>
      </div>
       <div class="wrapper">
          <div class="data-wrapper">
              <h4>Population:</h4>
              <span>${data.population}</span>
          </div>
      </div>
      <div class="wrapper">
          <div class="data-wrapper">
              <h4>Currency:</h4>
              <span>${data.currencies[Object.keys(data.currencies)[0]].name} - ${Object.keys(data.currencies)[0]}</span>
          </div>
      </div>
       <div class="wrapper">
          <div class="data-wrapper">
              <h4>Common Languages:</h4>
              <span>${Object.values(data.languages).join(", ")}</span>
          </div>
      </div>
    `;
  };
  
  // Function to display errors in the UI
  export const displayError = (error, countryName) => {
    const result = document.getElementById("result");
    if (error === 'empty') {
      result.innerHTML = `<h3>The input field cannot be empty</h3>`;
    } else {
      result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
    }
  };
  // utils.js

// Function to display the fetched country data
export const displayCountryData = (countryData) => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>${countryData.name.common}</h2>
        <p>Capital: ${countryData.capital ? countryData.capital[0] : 'N/A'}</p>
        <p>Population: ${countryData.population.toLocaleString()}</p>
        <p>Region: ${countryData.region}</p>
        <p>Flag: <img src="${countryData.flags.svg}" alt="Flag of ${countryData.name.common}" width="100"></p>
    `;
};
