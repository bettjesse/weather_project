// export const geoApiOptions = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "7f66e4b6a1mshe65d967e3e5455bp1d6035jsn77aee0579223",
//     "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//   },
// };
// export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
// export const WEATHER_API_KEY = "09cb4492f1e7799b0399cf3344491085";
const API_KEY = "09cb4492f1e7799b0399cf3344491085";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const response = await fetch(url);

  const data = await response.json();
  return data;

  // return fetch(url)
  // .then((res)=> res.json())
  // .then((data)=> data)
};

export default getWeatherData;
