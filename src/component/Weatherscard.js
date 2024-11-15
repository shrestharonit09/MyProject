import React from "react";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { CiCloudDrizzle } from "react-icons/ci";
import { FaWind } from "react-icons/fa6";
import { CiDroplet } from "react-icons/ci";

const Weatherscards = (props) => {
  const date = new Date(props.Datetime);
  const options = { weekday: "long" };
  const day = date.toLocaleDateString("en-US", options);

  return (
    <div className="bg-green-500 rounded-lg w-[36vw] md:w-[22vw] xl:[14vw] xl:w-[14vw] flex justify-center">
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-1">
        {/* <h1 className="text-2xl text-white text-center">{props.City}</h1> */}
        <h1 className="text-2xl text-white text-center">{day}</h1>
        <h1 className="text-xs text-white text-center">{props.Datetime}</h1>
        </div>
        <div className="flex justify-center">
        <img
          height={60}
          width={60}
          src={`https://openweathermap.org/img/wn/${props.Icons}@2x.png`}
          alt="icons"
        />
        </div>
        <div className="flex gap-2">
          <FaTemperatureEmpty className="text-white" />
          <h1 className="text-md text-white">
            {Math.round(props.Maxtemp - 273.15)}°C/
            {Math.round(props.Mintemp - 273.15)}°C
          </h1>
        </div>

        <div className="flex gap-2">
          <CiCloudDrizzle className="text-white" />
          <h1 className="text-md text-white"> {props.Mm}mm</h1>
        </div>

        <div className="flex gap-2">
          <FaWind className="text-white" />
          <h1 className="text-md text-white">{props.Speed}Km/H</h1>
        </div>

        <div className="flex gap-2">
          <CiDroplet className="text-white" />
          <h1 className="text-md text-white">{props.Humidity}%</h1>
        </div>
      </div>
    </div>
  );
};

export default Weatherscards;