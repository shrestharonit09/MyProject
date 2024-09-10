import React from "react";
import Logo from "../Image/TUlogo.png";
import Barcode from "../Image/barcode.png";
import html2canvas from "html2canvas";
import { PiDownloadSimpleBold } from "react-icons/pi";

const Card = (props) => {
  const handleDownload = () => {
    const cardData = document.getElementById("RonitShrestha");
    html2canvas(cardData, { useCORS: true }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "student_card.png";
      link.click();
    });
  };
  return (
    <div className="2xl:w-1/4" id="RonitShrestha">
      <button
        onClick={handleDownload}
        className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      >
        <PiDownloadSimpleBold size={24} />
      </button>
      <div className="bg-gradient-to-b from-blue-100 via-white to-blue-300 rounded-lg shadow-lg flex flex-col gap-2">
        <div className="flex gap-4 lg:gap-8 m-2">
          <div>
            <h1 className="font-bold text-lg lg:text-2xl text-white px-1 md:px-2 py-2 md:py-4 bg-blue-700 rounded-lg">
              B.Sc.CSIT
            </h1>
          </div>

          <img className="h-16 md:h-20 w-16 md:w-20" src={Logo} alt="TU LOGO" />
        </div>
        <div>
          <h1 className="font-semibold text-xs md:text-sm text-center text-blue-700">
            TRIBHUVAN UNIVERSITY
          </h1>
        </div>
        <div>
          <h1 className="text-lg lg:text-xl font-bold text-red-600 text-center">
            BHAKTAPUR MULTIPLE CAMPUS
          </h1>
        </div>
        <div>
          <h1 className="text-xs text-center font-semibold lg:font-bold">
            DOODHPATI-17, BHAKTAPUR :+977-1-6610200/6613199
          </h1>
        </div>
        <div className="flex justify-center mb-2 mt-2 lg:mt-4 lg:mb-4">
          <img
            className="w-20 md:w-32 h-20 md:h-32 rounded-lg"
            src={props.Image}
            alt="userpicture"
          />
        </div>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col gap-2 text-blue-900 font-semibold">
            <label htmlFor="ID">ID</label>
            <label htmlFor="Name">Name</label>
            <label htmlFor="Address">Address</label>
            <label htmlFor="Age">Age</label>
          </div>
          <div className="flex flex-col gap-2 text-blue-900 font-semibold">
            <h1>: {props.ID}</h1>
            <h1>: {props.Name}</h1>
            <h1>: {props.Address}</h1>
            <h1>: {props.Age}</h1>
            <img className="h-16 w-44" src={Barcode} alt="" />
          </div>
        </div>
        <div className="bg-blue-600 rounded-lg ">
          <h1 className="text-2xl font-bold text-white text-center">
            STUDENT IDENTITY CARD
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
