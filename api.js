// Function to fetch country data from the API


export const fetchCountryData = async (countryName) => {
    const finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    try {
      const response = await fetch(finalURL);
      if (!response.ok) {
        throw new Error('Country not found');
      }
      const data = await response.json();
      return data[0];
    } catch (error) {
      throw error;
    }
  };



export const fetchAllCountries = async () => {
    const finalURL = 'https://restcountries.com/v3.1/name/{name}';
    try {
        const response = await fetch(finalURL);
        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

// Search for a specific country by name
export const searchCountry = async (countryName) => {
    try {
        const countries = await fetchAllCountries();
        const filteredCountry = countries.find(
            country => country.name.common.toLowerCase() === countryName.toLowerCase()
        );
        if (!filteredCountry) {
            throw new Error('Country not found');
        }
        return filteredCountry;
    } catch (error) {
        throw error;
    }
};


export const addCountryData = async (newCountryData) => {
    const apiURL = 'https://restcountries.com/v3.1/name/{name}';  
    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCountryData),
        });
        if (!response.ok) {
            throw new Error('Failed to add new country');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};


export const updateCountryData = async (countryId, updatedData) => {
    const apiURL = `https://restcountries.com/v3.1/all/${countryId}`;  
    try {
        const response = await fetch(apiURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });
        if (!response.ok) {
            throw new Error('Failed to update country');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};


export const deleteCountryData = async (countryId) => {
    const apiURL = `https://restcountries.com/v3.1/all/${countryId}`;  
    try {
        const response = await fetch(apiURL, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete country');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
function modifyCountryData(data) {
    const modifiedData = {}; 
   if (data && data.name && data.name.common) {
     modifiedData.name = data.name.common;
   } else {
     modifiedData.name = 'N/A'; // Or handle the missing name differently
   }

   if (data && data.capital && data.capital[0]) {
     modifiedData.capital = data.capital[0];
   } else {
     modifiedData.capital = 'N/A'; // Or handle the missing capital differently
    return modifiedData;
  }

 
  /**
   * Fetches all countries from the API and returns them as an array
   */
// 
}