import { useEffect, useState } from "react";
import axios from "axios";
import WindyIcon, {
  HumidIcon,
  SnowIcon,
  SunnyCloudyIcon,
  SunnyIcon,
  SunnyRainyIcon,
} from "../componet/Windy";

export const Home = () => {
  const [err, setErr] = useState("");
  const [searchInput, setSearchInput] = useState("Ethiopia");
  const [search, setSearch] = useState("Ethiopia");
  const [weather, setWeather] = useState(null);

  const apiKey = import.meta.VITE_WEATHER_API;

  useEffect(() => {
    const res = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=83df8b5eea1f607c363ec00812d44b7e`
    )
      .then((response) => setWeather(response.data))
      .catch((error) => setErr(error));
  }, [search]);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(searchInput);
  }

  const WeatherIconRenderer = ({ main }) => {
    switch (main) {
      case "Clouds":
        return <SunnyCloudyIcon />;
      case "Clear":
        return <SunnyIcon />;
      case "Snow":
        return <SnowIcon />;
      case "Rain":
        return <SunnyRainyIcon />;
      default:
        return <SunnyIcon />;
    }
  };

  //const mains = weather?.weather?.[0].main;

  const bgChanger = (main) => {
    switch (main) {
      case "Clear": {
        return "bg-clear";
      }
      case "Rain": {
        return "bg-Rain";
      }
      case "Snow": {
        return "bg-Snow";
      }
      case "Clouds": {
        return "bg-Cloud";
      }
      default: {
        return "bg-Default";
      }
    }
  };

  return (
    <>
      <div
        className={`w-full min-h-screen text-white ${bgChanger(
          weather?.weather?.[0].main
        )} flex flex-col items-center overflow-x-hidden`}
      >
        <header className="w-full h-[70px] flex justify-center items-center font-times bg-white/5 backdrop-blur-2xl">
          <h1 className="">Weather Api</h1>
        </header>
        <div className="w-[80%] h-[70%] mt-[20px] p-3 flex flex-col items-center justify-center border-2 border-amber-50 bg-white/5 backdrop-blur-[3px] rounded-2xl space-y-3">
          <p className="">
            {weather?.name}, {weather?.sys?.country}
          </p>
          <WeatherIconRenderer main={weather?.weather?.[0].description} />

          <h1 className="">{weather?.main?.temp}°F</h1>
          <p className="">{weather?.weather?.[0].main}</p>
          <div className="w-full flex justify-around">
            <div className="flex space-x-2">
              <WindyIcon />
              <p className="">{weather?.wind?.speed}km</p>
            </div>
            <div className="flex space-x-2">
              <HumidIcon />
              <p className="">{weather?.main?.humidity}%</p>
            </div>
            <div className="flex space-x-2">
              <WindyIcon />
              <p className="">{weather?.wind?.speed}km</p>
            </div>
          </div>
          <div className="w-full ">
            <form
              action=""
              onSubmit={handleSearch}
              className="flex justify-center space-x-6"
            >
              <input
                type="text"
                value={searchInput}
                className="w-full p-3 bg-amber-50 text-black rounded-2xl"
                placeholder="Enter City..."
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                type="submit"
                className="p-3 rounded-2xl bg-gray-800 text-accent"
              >
                Submit
              </button>
            </form>
            {err ? <p>{err}</p> : ""}
          </div>
        </div>
      </div>
    </>
  );
};
