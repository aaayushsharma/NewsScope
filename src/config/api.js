const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "9d293dc02e961a858a51253ea0a231d8";
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;
