import React from "react";
import Logo from "../Image/TUlogo.png";
import Barcode from "../Image/barcode.png";


const Card = (props) => {
  return (
    <div className="w-2/3 sm:w-1/4">
      <div className="bg-gradient-to-b from-blue-100 via-white to-blue-300 rounded-lg shadow-lg flex flex-col gap-2">
        <div className="flex gap-4 sm:gap-8 m-2">
          <div>
            <h1 className="font-bold text-lg sm:text-2xl text-white px-1 sm:px-2 py-2 sm:py-4 bg-blue-700 rounded-lg">
              B.Sc.CSIT
            </h1>
          </div>

          <img className="h-16 sm:h-20 w-16 sm:w-20" src={Logo} alt="TU LOGO" />
        </div>
        <div>
          <h1 className="font-semibold text-xs sm:text-sm text-center bg-gradient-to-r from-blue-800 to-sky-800 bg-clip-text text-transparent ">
            TRIBHUVAN UNIVERSITY
          </h1>
        </div>
        <div>
          <h1 className="text-lg sm:text-2xl font-bold text-red-600 text-center">
            BHAKTAPUR MULTIPLE CAMPUS
          </h1>
        </div>
        <div>
          <h1 className="text-xs text-center font-semibold sm:font-bold">
            DOODHPATI-17, BHAKTAPUR :+977-1-6610200/6613199
          </h1>
        </div>
        <div className="flex justify-center">
          <img className="w-20 sm:w-32 h-20 sm:h-32 rounded-lg" src={props.Image} alt="userpicture" />
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
        <div className="bg-blue-600 rounded-b-lg">
          <h1 className="text-2xl font-bold text-white text-center">
            STUDENT IDENTITY CARD
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
