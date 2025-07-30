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
  return (
    <>
      <div
        className={`w-full min-h-screen bg-gray-900 text-white flex flex-col items-center overflow-x-hidden`}
      >
        <div className="mt-10 w-[90%] h-[90%] p-5 bg-white/5 backdrop-blur-2xl border-2 border-accent">
          <h1 className="">Curency converter</h1>
        </div>
      </div>
    </>
  );
};
