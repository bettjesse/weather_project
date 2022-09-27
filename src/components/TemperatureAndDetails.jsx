import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300 ">
        <p>cloudy or whatever</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="" alt="" className="w-20" />
        <p className="text-5xl"> 34°</p>
        <div className="flex flex-col space-y-2">
          <div
            className="flex  font-light text-sm items-center justify-center
            "
          >
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="ml-1 font-medium">32°</span>
          </div>
          <div
            className="flex  font-light text-sm items-center justify-center
            "
          >
            <UilTear size={18} className="mr-1" />
            Humidity :<span className="ml-1 font-medium">32°</span>
          </div>
          <div
            className="flex  font-light text-sm items-center justify-center
            "
          >
            <UilWind size={18} className="mr-1" />
            Wind :<span className="ml-1 font-medium">32°</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light"></p> Rise{" "}
        <span className="font-medium ml-1">06:45AM</span>
        <p className="font-light"> |</p>
        <UilSun />
        <p className="font-light"></p> Set{" "}
        <span className="font-medium ml-1">06:45AM</span>
        <p className="font-light"> |</p>
        <UilSun />
        <p className="font-light"></p> High{" "}
        <span className="font-medium ml-1">06:45AM</span>
        <p className="font-light"> |</p>
        <UilSun />
        <p className="font-light"></p> Low{" "}
        <span className="font-medium ml-1">06:45AM</span>
        <p className="font-light"> |</p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
