import React from "react";
const Cardnews = (props) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col border rounded-lg bg-gray-100 shadow-lg w-full h-full">
        <img
          className="h-44 w-full object-cover rounded-t-lg"
          src={props.image}
          alt="News"
        />
        <div className="flex flex-col px-4 py-2">
          <h1 className="text-sm sm:text-base md:text-xl font-bold mb-2">
            {props.title.length > 50
              ? props.title.slice(0, 50) + "..."
              : props.title}
          </h1>
          <div className="flex-grow">
            <p className="lg:py-1 sm:text-base md:text-md">
              {props.description?.length >50
                ? props.description.slice(0,50) + "..."
                : props.description}
            </p>
          </div>
        </div>
        <div className="p-4 mt-auto">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <h2 className="text-sm sm:text-base md:text-xl font-bold">
                Published Date:&nbsp;
              </h2>
              <p className="lg:py-1 sm:text-base md:text-md">
                {props.publishdate.slice(0, 10)}
              </p>
            </div>
            <div className="flex">
              <h2 className="text-base md:text-xl font-bold">Author:&nbsp;</h2>
              <p className="lg:py-1 sm:text-base md:text-md">{props.author.length>15?props.author.slice(0,15)+"...":props.author}</p>
            </div>
          </div>
          <div>
            <a href={props.url}>
              <button className="w-full border rounded-lg bg-blue-500 text-white shadow-lg p-2 hover:bg-blue-600">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardnews;
