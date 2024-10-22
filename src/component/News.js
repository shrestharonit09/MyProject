import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Datanews from "./Datanews";
import Dates from "./Dates";
import { IoSearch } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const News = () => {
  const [Data, setData] = useState();
  const [country, setCountry] = useState("us");
  const [catagory, setCatagory] = useState("business");
  const [search, setSearch] = useState("");
  const [showsearch, setShowsearch] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const datafromapi = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${catagory}&q=${search}&apiKey=e1a9300df28c4a7a90acbfb83fb861fc`
        );
        const data = await response.json();
        let articles = data.articles;
        setData(articles);
      } catch {
      } finally {
        setLoading(false);
      }
    };
    datafromapi();
  }, [catagory, country, search]);

  const Navigate = useNavigate();
  const handleClear = () => {
    Navigate("/");
  };
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleSearch = () => {
    setShowsearch(!showsearch);
  };
  return (
    <div className="h-screen">
      <div className="w-full fixed bg-white top-0 z-50 h-32 sm:h-44 shadow-lg">
        <button onClick={handleClear} className="px-3 py-1">
          <h1 className="text-lg sm:text-2xl text-gray-600 hover:text-red-500 absolute top-0 right-2">
            x
          </h1>
        </button>
        <div>
          <div className="flex justify-between px-4">
            <Dates />
            <div>
              <img
                className="h-12 sm:h-16 w-20 sm:w-28"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYx9OFIkqlUI662ftlgWWM3q2FCdVJazisQ&s"
                alt="newslogo"
              />
            </div>

            <div className="flex items-center xl:w-1/4">
              {width <1280 ? (
                <div>
                  {showsearch ? (
                    <div className="fixed top-7 w-full left-0 px-4 flex">
                      <div
                        className="bg-white rounded-full flex items-center"
                        onClick={handleSearch}
                      >
                        <button>
                          <FaArrowLeft />
                        </button>
                      </div>
                      <input
                        className="rounded-lg border border-gray-400 w-full text-sm sm:text-md p-2 sm:p-4"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for News"
                      />
                    </div>
                  ) : (
                    <div>
                      <button>
                        <IoSearch onClick={handleSearch} className="text-md sm:text-xl"/>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <input
                  className="p-1 sm:p-2 rounded-lg border border-gray-400 w-full text-sm sm:text-md"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for News"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-1 sm:gap-2 ml-12 sm:ml-8 xl:ml-1">
          <div>
            <select
              className="rounded-lg bg-gray-300 text-black px-1 py-1 sm:py-2 text-sm sm:text-lg shadow-lg"
              value={catagory}
              onChange={(e) => setCatagory(e.target.value)}
            >
              <option value="business">Business</option>
              <option value="sport">Sports</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
            </select>
          </div>
          <div>
            <select
              className="rounded-lg bg-gray-300 text-black px-1 py-1 sm:py-2 text-sm  sm:text-lg shadow-lg"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="US">America</option>
              <option value="AE">UAE</option>
              <option value="AT">Austria</option>
              <option value="AU">Australia</option>
              <option value="BE">Belgium</option>
              <option value="BG">Bulgaria</option>
              <option value="BR">Brazil</option>
              <option value="CA">Canada</option>
              <option value="CH">Switz</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="CZ">Czech</option>
              <option value="DE">Germany</option>
              <option value="EG">Egypt</option>
              <option value="FR">France</option>
              <option value="GB">UK</option>
              <option value="GR">Greece</option>
              <option value="HU">Hungary</option>
              <option value="IE">Ireland</option>
              <option value="IL">Israel</option>
              <option value="IN">India</option>
              <option value="IT">Italy</option>
              <option value="JP">Japan</option>
              <option value="LV">Latvia</option>
              <option value="MA">Morocco</option>
              <option value="MX">Mexico</option>
              <option value="MY">Malaysia</option>
              <option value="NG">Nigeria</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="RO">Romania</option>
              <option value="RS">Serbia</option>
              <option value="RU">Russia</option>
              <option value="SE">Sweden</option>
              <option value="SI">Slovenia</option>
              <option value="SK">Slovakia</option>
              <option value="TH">Thailand</option>
              <option value="TR">Turkey</option>
              <option value="TW">Taiwan</option>
              <option value="UA">Ukraine</option>
              <option value="NP">Nepal</option>
              <option value="AU">Australia</option>
              <option value="CA">Canada</option>
            </select>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="absolute top-1/2 left-1/2">
          <ClipLoader size={100}/>
        </div>
      ) : (
        <div className="py-8 sm:py-12 mt-32 sm:mt-40 bg-gray-200">
          <Datanews data={Data} />
        </div>
      )}
    </div>
  );
};

export default News;
