import { useEffect, useState } from "react";
//import axios from "axios";

export const Home = () => {
  const USDRATE = 0.0134;
  const EURRATE = 0.0157;
  const CADRATE = 0.0969;
  const GBPRATE = 0.0177;
  const ETHRATE = 134;

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

  const [toogle, setToogle] = useState("calc");

  function Toogle(option) {
    setToogle(option);
  }

  const [selectedOption, setSelectedOption] = useState(null);

  const isCompleted = selectedOption !== null;

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div
        className={`w-full min-h-screen bg-gray-900 text-white flex flex-col items-center overflow-x-hidden`}
      >
        <aside
          className={`w-full h-fit flex justify-center items-center bg-gray-700 space-x-2`}
        >
          <button
            className="w-fit h-fit mt-6 size-10 p-3 rounded-[10px] bg-gray-800"
            onClick={() => Toogle("calc")}
          >
            Calculator
          </button>
          <button
            className="w-fit h-fit mt-6 size-10 p-3 rounded-[10px] bg-gray-800"
            onClick={() => Toogle("temp")}
          >
            Temperature
          </button>
          <button
            className="w-fit h-fit mt-6 size-10 p-3 rounded-[10px] bg-gray-800"
            onClick={() => Toogle("curr")}
          >
            Currency
          </button>
        </aside>
        <div className="w-full h-full flex flex-col items-center">
          {toogle === "calc" ? (
            <div className="mt-10 w-[90%] h-[90%] m-5 p-5 flex flex-col items-center space-y-3 bg-white/5 backdrop-blur-2xl border-2 border-accent">
              <h1 className="">Currency Converter</h1>
              <p className="">1 USD = 134ET</p>
              <h2 className="">
                USD - {searchInput} To Eth - {search}
              </h2>
              <form
                action=""
                className="w-full flex justify-between items-center space-x-2"
                onSubmit={handleClick}
              >
                <input
                  type="text"
                  className="w-full p-3 rounded-2xl bg-accent text-black"
                  placeholder="Enter Currency in USD"
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
          ) : null}
          {toogle === "temp" && (
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
          )}

          {toogle === "curr" && (
            <div className="bg-[#1a1a1a] text-white p-6 rounded-2xl max-w-md mx-auto shadow-lg">
              <h2 className="text-xl font-bold mb-2">Choose offer type</h2>
              <p className="text-gray-400 mb-4">
                What type of collaboration do you have in mind?
              </p>

              <div className="space-y-3">
                {["Collaboration", "Paid Plan", "Unpaid Plan"].map(
                  (option, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelect(option)}
                      className={`flex justify-between items-center p-3 rounded-xl border cursor-pointer 
              ${
                selectedOption === option
                  ? "border-green-500 bg-green-900/20"
                  : "border-gray-700"
              }`}
                    >
                      <span>{option}</span>
                      <span>➔</span>
                    </div>
                  )
                )}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
                  disabled={!isCompleted}
                  onClick={() => alert("Back clicked")}
                >
                  Back
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 disabled:opacity-50 "
                  disabled={!isCompleted}
                  onClick={() => alert("Next clicked")}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
