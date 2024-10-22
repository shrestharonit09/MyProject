import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
const Dates = () => {
  const [time, setTime] = useState(null);
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const today = date.getDate();
  const hour = date.getHours();

  const [minutes, setMinutes] = useState(null);
  const updateMinute = () => {
    const minute = new Date().getMinutes();
    setMinutes(minute);
  };
  useEffect(() => {
    updateMinute();
    const interval = setInterval(updateMinute, 6000);
    return () => clearInterval(interval);
  });

  const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  useEffect(() => {
    if (hour > 11) {
      setTime("PM");
    } else {
      setTime("AM");
    }
  }, [hour]);
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {width >1280 ? (
        <div className="flex gap-1 sm:gap-4 text-sm sm:text-lg items-center">
          <div className="mt-1">
            <FaRegClock />
          </div>
          <div className="flex gap-1 sm:gap-2">
            <span className="font-semibold">{days[day]},</span>
            <span>
              {today < 10 ? "0" : ""}
              {today}
            </span>
            <span>{months[month + 1]}</span>
            <span>{year}</span>
          </div>
          <span>|</span>
          <div className="flex gap-1">
            <span>{hour}</span>:
            <span>
              {minutes < 10 ? "0" : ""}
              {minutes}
            </span>
            <span>{time}</span>
          </div>
          
        </div>
      ) : (
        <div className="text-sm sm:text-md md:text-lg">
          <div className="flex gap-1">
            <span>{hour}</span>:
            <span>
              {minutes < 10 ? "0" : ""}
              {minutes}
            </span>
            <span>{time}</span>
          </div>
          <div className="font-semibold text-center">{days[day]}</div>
        </div>
      )}
    </div>
  );
};

export default Dates;
