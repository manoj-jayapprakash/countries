export const ALL_COUNTRIES_API_URL = "https://restcountries.com/v3.1/all";
export const GET_COUNTRY_API_URL = (code: string) =>
  `https://restcountries.com/v3.1/alpha/${code}`;
