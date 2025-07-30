import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  return (
    <>
      <div
        className={`w-full min-h-screen bg-gray-900 text-white flex flex-col items-center overflow-x-hidden`}
      >
        <div className="mt-10 w-[90%] h-[90%] p-5 flex flex-col items-center space-y-3 bg-white/5 backdrop-blur-2xl border-2 border-accent">
          <h1 className="">Currency Converter</h1>
          <h2 className="">To USD- </h2>
          <div className="w-full flex justify-between items-center space-x-2">
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-accent text-black"
            />
            <button className="p-3 rounded-[10px] bg-accent">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
