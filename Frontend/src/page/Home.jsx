import { useEffect, useState } from "react";
//import axios from "axios";

export const Home = () => {
  const USDRATE = 0.0134;
  const EURRATE = 0.0157;
  const CADRATE = 0.0969;
  const GBPRATE = 0.0177;
  const ETHRATE = 0.0134;

  const [searchInput1, setSearchInput1] = useState(null);
  const [search1, setSearch1] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
  const [search, setSearch] = useState(null);

  const handleClick1 = (e) => {
    e.preventDefault();
    const calc = Number((searchInput * 9) / 5 + 32);
    setSearch1(calc);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const calc = Number((searchInput * (ETHRATE * 1000)) / 1000);
    setSearch(calc);
  };
  return (
    <>
      <div
        className={`w-full min-h-screen bg-gray-900 text-white flex items-center overflow-x-hidden`}
      >
        <aside className="w-[100px] h-screen bg-gray-700"></aside>
        <div className="mt-10 w-[90%] h-[90%] p-5 flex flex-col items-center space-y-3 bg-white/5 backdrop-blur-2xl border-2 border-accent">
          <h1 className="">Currency Converter</h1>
          <p className="">1 USD = 120ET</p>
          <h2 className="">
            Eth - {searchInput} To USD - {search}
          </h2>
          <form
            action=""
            className="w-full flex justify-between items-center space-x-2"
            onSubmit={handleClick}
          >
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-accent text-black"
              placeholder="Enter Currency"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="p-3 rounded-[10px] bg-accent text-black"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="mt-10 w-[90%] h-[90%] p-5 flex flex-col items-center space-y-3 bg-white/5 backdrop-blur-2xl border-2 border-accent">
          <h1 className="">Temperature Converter</h1>
          <p className="">1°C = 33.8°F</p>
          <h2 className="">
            C - {searchInput1} To F - {search1}
          </h2>
          <form
            action=""
            className="w-full flex justify-between items-center space-x-2"
            onSubmit={handleClick1}
          >
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-accent text-black"
              placeholder="Enter Temp"
              onChange={(e) => setSearchInput1(e.target.value)}
            />
            <button
              type="submit"
              className="p-3 rounded-[10px] bg-accent text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
