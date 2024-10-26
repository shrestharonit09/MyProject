import React, { useState } from "react";
import { info } from "./Homedeskinfo";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index < info.length - 1) setIndex(index + 1);
  };
  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-8 sm:gap-4 md:justify-around items-center py-8">
      <button onClick={handlePrevious} className='p-2 rounded-full bg-blue-500 hover:bg-blue-600'>
        <FaArrowLeft className="text-gray-300 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"/>
      </button>
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold flex flex-col gap-2 md:gap-4">
        <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
          {info[index].word1}
        </h1>
        <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
          {info[index].word2}
        </h1>
        <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {info[index].word3}
        </h1>
        <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
          {info[index].word4}
        </h1>
      </div>
      <div>
        <img
          src={info[index].image}
          alt="FrontImage"
          className="rounded-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]  xl:h-[550px] w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[550px] shadow-lg border-2 border-gray-300 shadow-purple-500"
        />
      </div>
      <button onClick={handleNext} className='p-2 rounded-full bg-blue-500 hover:bg-blue-600'>
        <FaArrowRight className="text-gray-300 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"/>
      </button>
    </div>
  );
};

export default Home;
