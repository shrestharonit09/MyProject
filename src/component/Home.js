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
    <div className="p-8 flex justify-around items-center">
      <button onClick={handlePrevious} className='p-2 rounded-full bg-blue-500 hover:bg-blue-600'>
        <FaArrowLeft size={25} className="text-gray-300"/>
      </button>
      <div className="text-5xl font-bold flex flex-col gap-4">
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
          className="rounded-full h-[550px] w-[550px] shadow-lg border-2 border-gray-300 shadow-purple-500"
        />
      </div>
      <button onClick={handleNext} className='p-2 rounded-full bg-blue-500 hover:bg-blue-600'>
        <FaArrowRight size={25} className="text-gray-300"/>
      </button>
    </div>
  );
};

export default Home;
