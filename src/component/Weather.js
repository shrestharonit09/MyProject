import React, { useState, useEffect } from "react";
import Weatherscards from "./Weatherscard"

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const districts = [
    { name: "Kathmandu", lat: 27.7172, lon: 85.324 },
    { name: "Lalitpur", lat: 27.6588, lon: 85.3247 },
    { name: "Bhaktapur", lat: 27.671, lon: 85.4298 },
    { name: "Pokhara", lat: 28.2096, lon: 83.9856 },
    { name: "Biratnagar", lat: 26.7288, lon: 87.9259 },
    { name: "Butwal", lat: 27.7005, lon: 83.4489 },
    { name: "Dharan", lat: 26.8126, lon: 87.2837 },
    { name: "Birgunj", lat: 27.0131, lon: 84.877 },
    { name: "Nepalgunj", lat: 28.05, lon: 81.6167 },
    { name: "Dhangadhi", lat: 28.6956, lon: 80.5931 },
    { name: "Hetauda", lat: 27.4216, lon: 85.0322 },
   
  ];

  const fetchWeatherData = async (lat, lon) => {
    const apiKey = "85ddfa36b52f28b28ec40b04ceae1b7b";
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Weather data not available");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

  const findNearestForecast = (forecastList) => {
    const currentTime = new Date();
    const today = currentTime.toISOString().slice(0, 10);

    // Filter forecasts for today
    const todayForecasts = forecastList.filter(
      (forecast) => forecast.dt_txt.slice(0, 10) === today
    );

    // Find forecast closest to current time
    const nearestForecast = todayForecasts.reduce((prev, curr) => {
      const prevTimeDiff = Math.abs(new Date(prev.dt_txt) - currentTime);
      const currTimeDiff = Math.abs(new Date(curr.dt_txt) - currentTime);
      return prevTimeDiff < currTimeDiff ? prev : curr;
    });

    return nearestForecast;
  };

  useEffect(() => {
    const fetchDataForAllDistricts = async () => {
      const promises = districts.map((district) =>
        fetchWeatherData(district.lat, district.lon)
      );
      const weatherDataArray = await Promise.all(promises);


      const processedData = weatherDataArray.map((data, index) => {
        const nearestForecast = findNearestForecast(data.list);

      
        const currentDate = new Date();
        const nextSixDaysForecasts = data.list.filter((forecast) => {
          const forecastDate = new Date(forecast.dt_txt);
          return (
            forecastDate.getDate() !== currentDate.getDate() &&
            forecastDate.getHours() === 12
          );
        });

        return {
          city: districts[index].name,
          current: nearestForecast,
          nextSixDays: nextSixDaysForecasts.slice(0, 6),
        };
      });

      setWeatherData(processedData);
    };

    fetchDataForAllDistricts();
  });

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    setSelectedDistrict(selectedDistrict);
  };

  const renderWeatherCards = () => {
    if (selectedDistrict === "") {
      return null;
    }

    const selectedData = weatherData.find(
      (data) => data.city === selectedDistrict
    );

    if (!selectedData) {
      return <p>No weather data available for {selectedDistrict}</p>;
    }

    return (
      <div className="col-span-5">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-center">{selectedData.city}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
           {/* today */}
          <Weatherscards
            key={selectedData.current.dt}
            Datetime={selectedData.current.dt_txt.slice(0, 10)}
            Icons={selectedData.current.weather[0].icon}
            Maxtemp={selectedData.current.main.temp_max}
            Mintemp={selectedData.current.main.temp_min}
            Mm={selectedData.current.rain && selectedData.current.rain["3h"]}
            Speed={selectedData.current.wind.speed}
            Humidity={selectedData.current.main.humidity}
            City={selectedData.city}
          />

       {/* Future Days */}
          {selectedData.nextSixDays.map((item, idx) => (
            <Weatherscards
              key={idx}
              Datetime={item.dt_txt.slice(0, 10)}
              Icons={item.weather[0].icon}
              Maxtemp={item.main.temp_max}
              Mintemp={item.main.temp_min}
              Mm={item.rain && item.rain["3h"]}
              Speed={item.wind.speed}
              Humidity={item.main.humidity}
              City={selectedData.city}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8 container mx-auto px-4 py-8">
      <h1 className="flex justify-center text-xl md:text-2xl lg:text-3xl font-semibold mb-8">Weather Forecast</h1>
      <div className="mb-4">
        <label htmlFor="districtSelect" className="mr-2 font-semibold text-lg">
          Select District:
        </label>
        <select
          id="districtSelect"
          className="p-2 border border-gray-500 bg-gray-200 rounded-t-lg rounded-b-lg"
          onChange={handleDistrictChange}
          value={selectedDistrict}
        >
          <option value="" disabled hidden>Select a district</option>
          {districts.map((d) => (
            <option key={d.name} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-5 gap-4">{renderWeatherCards()}</div>
    </div>
  );
};

export default WeatherForecast;