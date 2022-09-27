import React, { useState } from "react";
// import Search from "./components/Search";
// import Currentweather from "./components/Currentweather";
// import { WEATHER_API_KEY,WEATHER_API_URL } from "./Api/Api";
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./Services/weatherService";


const App = () => {
  const fetchWeather= async ()=>{
    const data= await getWeatherData("weather" ,{q:"nairobi"})
    console.log(data)
  }
  fetchWeather()
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton/>
      <Inputs/>

      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <Forecast title={"hourly forecast"}/>
      <Forecast title={"daily forecast"}/>
    </div>
  )


  // const [currentWeather, setCurrentWeather] = useState(null);
  // const [forecast, setForecast] = useState(null);

  // const handleOnSearchChange = (searchData) => {
  //   const asyncFetch = async () => {
  //     const [lat, lon] = searchData.value.split(" ");

  //     const currentWeatherFetch = await fetch(
  //       `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  //     );
  //     const forecastFetch = await fetch(
  //       `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  //     );

  //     const response = await Promise.all([currentWeatherFetch, forecastFetch]);
  //     const weatherResponse = await response[0].json();
  //     const forecastResponse = await response[1].json();
  //     setCurrentWeather({ city:searchData.label, ...weatherResponse });
  //     setForecast({ city:searchData.label, ...forecastResponse });
  //   };
  //   asyncFetch();
  // };
  // console.log(currentWeather);
  // console.log(forecast);

  // return (
  //   <div className="my-[20px] mx-[auto] max-w-[1080px]">
  //     <Search onSearchChange={handleOnSearchChange} />
  //     {currentWeather ? <Currentweather data= {currentWeather}/>
  //     :null}
   
  //   </div>
  // );
};
export default App;
