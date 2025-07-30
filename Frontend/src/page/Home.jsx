import { useEffect, useState } from "react";
//import axios from "axios";

export const Home = () => {
  const USDRATE = 0.012;

  const [searchInput, setSearchInput] = useState(null);
  const [search, setSearch] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    const calc = Number((searchInput * (USDRATE * 1000)) / 1000);
    setSearch(calc);
  };

  return (
    <>
      <div
        className={`w-full min-h-screen bg-gray-900 text-white flex flex-col items-center overflow-x-hidden`}
      >
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
      </div>
    </>
  );
};
