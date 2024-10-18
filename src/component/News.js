import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Datanews from "./Datanews";
import Dates from "./Dates";

const News = () => {
  const [Data, setData] = useState();
  const [country, setCountry] = useState("us");
  const [catagory, setCatagory] = useState("business");
  const[search,setSearch]=useState("")
  console.log(Data)

  const datafromapi = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${catagory}&q=${search}&apiKey=e1a9300df28c4a7a90acbfb83fb861fc`
      );
      const data = await response.json();
      let articles = data.articles;
      setData(articles);
    } catch {}
  };
  useEffect(() => {
    datafromapi();
  },[catagory,country,search]);
  const Navigate = useNavigate();
  const handleClear = () => {
    Navigate("/");
  };

  return (
    <div className="h-screen relative">
      <div className="w-full fixed bg-white top-0 z-50 p-4 h-40 shadow-lg">
        <div>
          <div className="flex justify-between">
            <Dates />
            <div className="flex justify-center">
              <div className="h-20 w-40">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYx9OFIkqlUI662ftlgWWM3q2FCdVJazisQ&s"
                  alt="newslogo"
                />
              </div>
            </div>
            <div className="w-1/4 h-2/3 flex gap-4">
              <input
                className="p-2 rounded-lg border border-gray-400 w-full"
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search for News"
              />
              <button onClick={handleClear} className="px-3 py-1">
                <h1 className="text-2xl text-gray-600 hover:text-red-500">x</h1>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <div>
            <select
              className="rounded-lg bg-gray-300 text-black px-1 py-2 text-lg shadow-lg"
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
              className="rounded-lg bg-gray-300 text-black  px-1 py-2 text-lg shadow-lg"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="US">America</option>
              <option value="AE">UAE</option>
              <option value="AR">Argentina</option>
              <option value="AT">Austria</option>
              <option value="AU">Australia</option>
              <option value="BE">Belgium</option>
              <option value="BG">Bulgaria</option>
              <option value="BR">Brazil</option>
              <option value="CA">Canada</option>
              <option value="CH">Switzerland</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="CZ">Czech</option>
              <option value="DE">Germany</option>
              <option value="EG">Egypt</option>
              <option value="FR">France</option>
              <option value="GB">UK</option>
              <option value="GR">Greece</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="ID">Indonesia</option>
              <option value="IE">Ireland</option>
              <option value="IL">Israel</option>
              <option value="IN">India</option>
              <option value="IT">Italy</option>
              <option value="JP">Japan</option>
              <option value="KR">South Korea</option>
              <option value="LT">Lithuania</option>
              <option value="LV">Latvia</option>
              <option value="MA">Morocco</option>
              <option value="MX">Mexico</option>
              <option value="MY">Malaysia</option>
              <option value="NG">Nigeria</option>
              <option value="NL">Netherlands</option>
              <option value="NZ">New Zealand</option>
              <option value="PH">Philippines</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="RO">Romania</option>
              <option value="RS">Serbia</option>
              <option value="RU">Russia</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SE">Sweden</option>
              <option value="SG">Singapore</option>
              <option value="SI">Slovenia</option>
              <option value="SK">Slovakia</option>
              <option value="TH">Thailand</option>
              <option value="TR">Turkey</option>
              <option value="TW">Taiwan</option>
              <option value="UA">Ukraine</option>
              <option value="US">United States</option>
              <option value="VE">Venezuela</option>
              <option value="ZA">South Africa</option>
              <option value="NP">Nepal</option>
              <option value="AU">Australia</option>
              <option value="CA">Canada</option>
            </select>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 mt-40 bg-gray-200">
        <Datanews data={Data} />
      </div>
    </div>
  );
};

export default News;
