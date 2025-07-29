import React from "react";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/Home");
  }, 5000);

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center landing">
        <h1 className="text-white">Welcome to Weather</h1>
      </div>
    </>
  );
};
