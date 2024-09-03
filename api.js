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
  