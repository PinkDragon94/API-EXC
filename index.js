

import { fetchAllCountries, searchCountry, addCountryData, updateCountryData, modifyCountryData } from './api.js';
import { displayCountryData } from './ui.js';

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-inp');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', async () => {
    const countryName = searchInput.value.trim();
    if (!countryName) {
        alert('Please enter a country name');
        return;
    }

    try {
        const countryData = await searchCountry(countryName);
        displayCountryData(countryData);
    } catch (error) {
        console.error('Error fetching country data:', error);
        resultDiv.innerHTML = '<h3>Error fetching country data. Please try again.</h3>';
    }
});


const newCountryData = {
    name: { common: "Newlandia" },
    capital: ["Newland City"],
    population: 500000,
    region: "Oceania",
};

addCountryData(newCountryData).then(data => {
    console.log('Country added:', data);
}).catch(error => {
    console.error('Error adding country:', error);
});

// Updating a country by ID
const updatedData = {
    name: { common: "Newlandia Updated" },
    population: 600000,
};

updateCountryData(1, updatedData).then(data => {
    console.log('Country updated:', data);
}).catch(error => {
    console.error('Error updating country:', error);
});

// Modifying a country by ID
const partialData = {
    population: 700000,
};

modifyCountryData(1, partialData).then(data => {
    console.log('Country modified:', data);
}).catch(error => {
    console.error('Error modifying country:', error);
});
